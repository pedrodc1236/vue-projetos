new Vue({
  el: '#app',
  data: {
    desistGame: true,
    playerLife: 100,
    monsterLife: 100,
    width: 20,
    historic: []
  },
  computed: {
    result() {
      return this.playerLife == 0 || this.monsterLife == 0;
    }
  },
  methods: {
    attack(especial) {
      this.bluiser('monsterLife', 5, 10, especial, 'Jogador', 'Monstro', 'player')
      if (this.monsterLife > 0) {
        this.bluiser('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
      }
    },
    bluiser(atr, min, max, especial, attacker, target, cls) {
      const plus = especial ? 5 : 0
      const bluiser = this.randomNumber(min + plus, max + plus)
      this[atr] = Math.max(this[atr] - bluiser, 0)
      this.addList(`O ${attacker} atingiu o ${target} com ${bluiser}!`, cls)
    },
    startGame() {
      this.desistGame = false
      this.playerLife = 100;
      this.monsterLife = 100;
      this.historic = [];
    },
    randomNumber(min, max) {
      const value = Math.random() * (max - min) + min
      return Math.round(value)
    },
    heal() {
      if (this.playerLife !== 100) {
        this.playerLife += 9.5 
        this.addList(`O Jogador foi curado em ${9.5}`, 'player')
      }
      this.bluiser('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
    },
    addList(textAttk, cls) {
      this.historic.unshift({ textAttk, cls })
    }
  },
  watch: {
    result(value) {
      if (value) this.desistGame = true;
    }
  }
})
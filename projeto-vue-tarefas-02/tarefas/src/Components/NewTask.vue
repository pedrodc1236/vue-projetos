<template>
    <div class="new-task">
        <input v-model="name" 
            class="element-form"
            @keydown.enter="addTask" 
            placeholder="Nova Tarefa?"
            type="text">
        <button 
            class="element-form"
            @click="addTask">+</button>
    </div>
</template>

<script>
export default {
    data() {
      return {
        name: ''
      }
    },
    methods: {
      addTask() {
          this.$emit('taskAdd', { name: this.name })
          this.name = ''
      }
    }
}
</script>

<style>
    .new-task {
      margin: 30px
    }

    .element-form {
      outline: none;
      font-size: 2rem;
      border: 1px solid #FFF;
      padding: 5px 10px 8px;
      color: #FFF
    }

    input.element-form {
      width: 450px;
      background: #FFF2;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    button.element-form {
      border-left: none;
      background-color: #2196F3;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
</style>
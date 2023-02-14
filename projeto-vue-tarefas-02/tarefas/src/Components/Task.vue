<template>
    <div class="task" 
        @click="$emit('toggleStateChange', task)"
        :class="stateClass">
        <span @click.stop="$emit('taskDeleted', task)" class="close">x</span>
        <p>{{ task.name }}</p>
    </div>
</template>

<script>
export default {
    props: {
      task: { type: Object, required: true }
    },
    computed: {
        stateClass() {
            return {
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    }
}
</script>

<style>
    .task {
        position: relative;
        box-sizing: border-box;
        width: 300px;
        height: 125px;
        padding: 10px;
        border-radius: 5px;
        font-size: 2rem;
        font-weight: 250;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .done {
        color: #DDD;
        background-color: rgb(34, 161, 34);
        border-left: 12px solid rgba(10, 163, 10, 0.925);
        text-decoration: line-through;
    }

    .pending {
        background-color: rgba(255, 0, 0, 0.726);
        border-left: 12px solid rgba(247, 9, 9, 0.959);
    }

    .pending .close {
        background-color: rgba(247, 9, 9, 0.959);
    }

    .done .close {
        background-color: rgba(10, 163, 10, 0.925);
    }

    .close {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
    }
</style>
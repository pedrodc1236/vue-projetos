<template>
	<div id="app">
		<h1>Tarefas</h1>
		<BarProgress :progress="progress" />
		<NewTask @taskAdd="add"/>
		<TasksGrid @taskDeleted="deleteTask" 
			@toggleStateChange="toggleTaskChange"
			:tasks="tasks"/>
	</div>
</template>

<script>
import TasksGrid from './Components/TasksGrid.vue'
import NewTask from './Components/NewTask.vue'
import BarProgress from './Components/BarProgress.vue'

export default {
		components: { TasksGrid, NewTask, BarProgress },
		data() {
				return {
						tasks: []
				}
		},
		computed: {
				progress() {
						const total = this.tasks.length;
						const done = this.tasks.filter(t => !t.pending).length
						return Math.round(done / total * 100) || 0
				}
		},
		watch: {
				tasks: {
						deep: true,
						handler() {
								localStorage.setItem('tasks', JSON.stringify(this.tasks))
						}
				}
		},
		methods: {
			add(task) {
				const taskExists = this.tasks.filter(t => t.name === task.name)
				const haveTask = taskExists.length === 0
				haveTask && this.tasks.push({
					name: task.name,
					pending: task.pending || true
				})
			},
			deleteTask(index) {
					this.tasks.splice(index, 1)
			},
			toggleTaskChange(index) {
					this.tasks[index].pending = !this.tasks[index].pending
			}
		},
		created() {
				const json = localStorage.getItem('tasks');
				const arrayTasks = JSON.parse(json);
				this.tasks = Array.isArray(arrayTasks) ? arrayTasks : []
		}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>

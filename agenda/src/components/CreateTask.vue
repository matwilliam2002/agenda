<template>
  <div class="create-task">
    <h2>Criar Nova Tarefa</h2>
    <form @submit.prevent="addTask">
      <div class="form-group">
        <label for="task-name">Nome da Tarefa:</label>
        <input
          v-model="taskName"
          type="text"
          id="task-name"
          placeholder="Digite o nome da tarefa"
          required
        />
      </div>

      <div class="form-group">
        <label for="task-color">Cor da Tarefa:</label>
        <input
          v-model="taskColor"
          type="color"
          id="task-color"
          required
        />
      </div>

      <button type="submit">Adicionar Tarefa</button>
    </form>

    <h3>Tarefas Criadas</h3>
    <ul>
      <li v-for="(task, index) in tasks" :key="index" :style="{ backgroundColor: task.color }">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CreateTask',
  data() {
    return {
      taskName: '', // Inicialize como uma string vazia
      taskColor: '#ffffff',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.taskName && this.taskColor) {
        // Adiciona a tarefa à lista de tarefas
        this.tasks.push({
          name: this.taskName,
          color: this.taskColor
        });

        // Limpa o formulário após adicionar a tarefa
        this.taskName = '';
        this.taskColor = '#ffffff';
      }
    }
  }
};
</script>

<style scoped>
.create-task {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

input[type="color"] {
  width: 100%;
  padding: 5px;
  border: none;
}

button {
  background-color: #42b983;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #37946e;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 3px;
  color: white;
}
</style>

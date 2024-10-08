<template>

  <div class="conteiner">


    <div class="created-tasks">
      <h3>Tarefas Criadas</h3>
      <div class="tarefas-criadas">
        <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" />
      </div>
    </div>
    <div class="create-task">
      <h2>Criar Nova Tarefa</h2>
      <form @submit.prevent="addTask">
        <div class="form-group">
          <label for="task-name">Nome da Tarefa:</label>
          <input
            v-model="taskName"
            type="text"
            id="task-name"
            name="nome"
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
            name="cor"
            required
          />
        </div>
        <button class="add-task" type="submit">Adicionar Tarefa</button>
      </form>
    </div>


  </div>

  
</template>

<script>
import TaskItem from '@/components/TaskItem.vue';
import '@/assets/css/CreateTask.css'; 

export default {
  name: 'CreateTask',
  components: {
    TaskItem
  },
  data() {
    return {
      taskName: '',
      taskColor: '#ffffff',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.taskName && this.taskColor) {
        // Faz uma requisição POST ao servidor Express
        fetch("http://localhost:3000/adicionaTarefa", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            nome: this.taskName,
            cor: this.taskColor
          })
        })
        .then(response => {
          if (!response.ok) {
            console.error("Erro ao enviar a tarefa.");
          }
        })
        .catch(error => {
          console.error("Erro:", error);
        });

        // Adiciona a tarefa à lista local imediatamente
        this.tasks.push({
          nome: this.taskName,
          cor: this.taskColor
        });

        // Limpa o formulário após adicionar a tarefa
        this.taskName = '';
        this.taskColor = '#ffffff';
      }
    }
  }
};
</script>

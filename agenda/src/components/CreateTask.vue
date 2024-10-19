<template>

  <div class="conteiner">

    <div class="created-tasks">
      <h3>Tarefas Criadas</h3>
      <div class="tarefas-criadas">
        <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" @task-deleted="removeTaskFromList" />
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

<style lang="css">
@import "../assets/css/CreateTask.css";
</style>

<script>
import {ref, onMounted} from 'vue';
import TaskItem from '@/components/TaskItem.vue';

export default {
  name: 'CreateTask',
  components: {
    TaskItem
  },
  setup() {
    const tasks = ref([]);

    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:3000/listaTarefa', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        
        tasks.value = data;
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    };

    const removeTaskFromList = (taskId) => {
      tasks.value = tasks.value.filter(task => task.id !== taskId);
    };

    onMounted(() => {
      fetchTasks();
    });

    return {
      tasks,
      removeTaskFromList
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
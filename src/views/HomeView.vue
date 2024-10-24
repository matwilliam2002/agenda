<template>
  <div id="app">
    <AppNavbar/>
    <div class="conteiner-de-tarefas">
      <br>
      <div class="lista-de-tarefas">
        <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" @task-deleted="removeTaskFromList" />
      </div>
    </div>
    <router-view />
  </div>
</template>



<script>
import { ref, onMounted } from 'vue';
import AppNavbar from '@/components/AppNavbar.vue';
import TaskItem from '@/components/TaskItem.vue';

export default {
  name: 'HomeView',
  components: {
    AppNavbar,
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
};
</script>



<style>

  .conteiner-de-tarefas {
    background-color: white;
  }

  .lista-de-tarefas {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    color: white;

  }

</style>
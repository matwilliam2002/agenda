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

<style lang="css">
@import "../assets/css/HomeView.css";
</style>

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

<template>
  <div id="app">
    <AppNavbar msg="Minha Marca" />
    <div>
      <ul>
        <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" />
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import AppNavbar from '@/components/AppNavbar.vue';
import TaskItem from '@/components/TaskItem.vue';
import '@/assets/css/HomeView.css'; 

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

    onMounted(() => {
      fetchTasks();
    });

    return {
      tasks,
    };
  },
};
</script>


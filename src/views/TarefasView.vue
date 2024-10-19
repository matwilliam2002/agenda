<template>
  <div id="app">
    <AppNavbar/>
    <CreateTask />
    <router-view />
  </div>

  
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';
import CreateTask from '@/components/CreateTask.vue';

export default {
  name: 'TarefasView',
  components: {
    AppNavbar,
    CreateTask,
  },
};
</script>

<style scoped>
  .titulo-tarefas{
  text-align: center; 
  font-size: 2rem; 
  margin-top: 20px;
  }
</style>

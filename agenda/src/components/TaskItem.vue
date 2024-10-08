<template>
    <div class="task-item">
      <span class="task-marker" :style="{ backgroundColor: task.cor }"></span>
      <span class="task-nome">{{ task.nome }}</span>
      <span class="material-icons">select_check_box</span>
      <span class="material-icons">delete</span>
    </div>
  </template>
  
  <script>
  import '@/assets/css/TaskItem.css'; 
  export default {
    name: 'TaskItem',
    props: {
      task: {
        type: Object,
        required: true
      }
    }
  };
  </script>

<style lang="css">
    @import "https://fonts.googleapis.com/icon?family=Material+Icons";
</style>


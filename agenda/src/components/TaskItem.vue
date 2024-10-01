<template>
    <li class="task-item">
      <span class="task-nome">{{ task.nome }}</span>
      <span class="task-marker" :style="{ backgroundColor: task.cor }"></span>
    </li>
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
  

  
<template>
  <div class="task-item">
    <span class="task-marker" :style="{ backgroundColor: task.cor }"></span>
    <span class="task-nome">{{ task.nome }}</span>
    <span class="material-icons">select_check_box</span>
    <span class="material-icons" @click="deleteTask">delete</span>
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
  },
  methods: {
    async deleteTask() {
      try {
        const response = await fetch(`http://localhost:3000/deletarTarefa`, {
          method: 'DELETE',
          body:JSON.stringify({
            id:this.task.id
          }),
          headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
          throw new Error(`Erro ao deletar tarefa: ${response.statusText}`);
        }

        // Verifica se a resposta é JSON válida
        const responseData = await response.json().catch(() => null);
        if (responseData) {
          this.$emit('task-deleted', this.task.id);
        } else {
          console.error('Erro ao deletar tarefa: Resposta não é JSON válida');
        }
      } catch (error) {
        console.error('Erro ao deletar tarefa:', error);
      }
    }
  }
};
</script>

<style lang="css">
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
</style>

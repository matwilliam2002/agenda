
<template>
    <div class="task-item">
      <span class="task-marker" :style="{ backgroundColor: task.cor }"></span>
      <span class="task-nome">{{ task.nome }}</span>
      <div class="acoes">
        <span class="material-symbols-rounded icone" @click="checkTask">check_box</span>
        <span class="material-symbols-rounded icone" @click="deleteTask">delete</span>
      </div>
    </div>
</template>

<style lang="css">
@import "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded";
@import "../assets/css/TaskItem.css";
</style>

<script>
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
    },
    async checkTask() {
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



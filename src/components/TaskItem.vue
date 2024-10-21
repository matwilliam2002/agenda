
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
        const response = await fetch(`http://localhost:3000/checkTask`, {
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



<style>

  .task-item {
    display: grid;
    grid-template-columns: 1fr 12fr 1fr;
    color: black;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
    border: 1px solid #ddd;
    margin-bottom: 10px;
    background-color: #f5f3f3;
  }

  .task-item:hover {
    transform: scale(1.01);
  }


  .task-nome {
    font-weight: bold;
    word-break: break-word;
    white-space: normal;
    padding: 5px;
  }

  .task-marker {
    width: 80%;
    height: 100%; 
    border-radius: 8px 0px 0px 8px;
  }

  .icone {
    cursor: pointer;
    padding: 5px;
    width: 40px;
  }

  @property --fill{
    syntax: '<percentage>';
    inherits: true;
    initial-value: 0%;
  }

  .icone:hover {
    color: #2c3e50;
    --fill: 100%;
  }

  .icone::after {
    width: 40px;
    height: 34px;
    position: absolute;
    z-index: -1;
    content: '';
    inset: -5px;
    border-radius: inherit;

    background-color: conic-gradient(
      #2c3e50 var(--fill),
      transparent var(--fill));
    
    transition: var(--fill) 0.6s ease-in-out;
  }

  .acoes {
    grid-column: 1fr 1fr;
  }

</style>
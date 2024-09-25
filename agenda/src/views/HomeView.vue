<template>
  <div id="app">
    <AppNavbar msg="Minha Marca" />
    
   
    <div>
    
      <ul>
        <li v-for="(task, index) in tasks" :key="index" :style="{ backgroundColor: task.cor }">
          {{ task.nome }}
        </li>
      </ul>
    </div>

    <router-view />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import AppNavbar from '@/components/AppNavbar.vue';

export default {
  name: 'HomeView',
  components: {
    AppNavbar,
  },
  setup() {
    // Variável reativa para armazenar as tarefas
    const tasks = ref([]);

    // Função para buscar as tarefas
    const fetchTasks = async () => {
      try {
        fetch('http://localhost:3000/listaTarefa',{
          method:'GET',
          headers:{'Content-Type':'application/json'}
        })
        .then(dados=>dados.json())
        .then(dados=>tasks.value = dados);
        // const data = await response.json();
        // console.log(data);
        
        // tasks.value = data; 
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
      }
    };

    // Executa a função quando o componente é montado
    onMounted(() => {
      fetchTasks();
    });

    // Retorna as tarefas para o template
    return {
      tasks,
    };
  },
};
</script>

<style scoped>
/* Estilos adicionais para as tarefas */
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

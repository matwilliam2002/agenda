<template>
  <nav class="AppNavbar">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">Lista de tarefas</router-link>
    </div>

    <div class="navbar-menu">
      <ul class="navbar-start">
        <li><router-link to="/home" class="navbar-item">Home</router-link></li>
        <li><router-link to="/tarefas" class="navbar-item">Tarefas</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.AppNavbar {
  background-color: #2c3e50; 
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
}

.navbar-brand .navbar-item {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.navbar-menu .navbar-start {
  display: flex;
  gap: 1.5rem; 
}

.navbar-item {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.navbar-item:hover {
  color: #42b983; 
  text-decoration: underline; 
}

/* Responsividade */
@media (max-width: 768px) {
  .AppNavbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-menu .navbar-start {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>

<script>
export default {
  name: 'AppNavbar',
  props: {
    msg: {
      type: String,
      default: 'Brand',
    },
  },
};
</script>

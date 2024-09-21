<template>
  <nav class="AppNavbar">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">{{ msg }}</router-link> <!-- Exemplo de uso da prop -->
    </div>

    <div class="navbar-menu">
      <ul class="navbar-start">
        <li><router-link to="/home" class="navbar-item">Home</router-link></li>
        <li><router-link to="/about" class="navbar-item">About</router-link></li>
        <li><router-link to="/tarefas" class="navbar-item">Tarefas</router-link></li>
        <li><router-link to="/contact" class="navbar-item">Contact</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.AppNavbar {
  background-color: #2c3e50; /* Cor de fundo da navbar */
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra leve para dar profundidade */
}

.navbar-brand .navbar-item {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.navbar-menu .navbar-start {
  display: flex;
  gap: 1.5rem; /* Espaçamento entre os itens */
}

.navbar-item {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.navbar-item:hover {
  color: #42b983; /* Efeito hover, mudando a cor para verde */
  text-decoration: underline; /* Sublinha o link ao passar o mouse */
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

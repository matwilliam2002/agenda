<template>
  <div id="app">
    <AppNavbar msg="Minha Marca" />
    <router-view />
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';

export default {
  name: 'HomeView',
  components: {
    AppNavbar,
  },
};
</script>


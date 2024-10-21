import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import TarefasView from '@/views/TarefasView.vue';
import LoginView from '@/views/LoginView.vue';
import CadastroView from '@/views/CadastroView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'  // Redireciona para /home quando acessa a raiz
  },
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/tarefas',
    name: 'Tarefas',
    component: TarefasView,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: CadastroView,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

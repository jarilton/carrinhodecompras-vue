import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home
  },
  {
    path: '/produtos',
    name: 'Produtos',
    component: () => import(/* webpackChuckName: "Produtos" */ '@/views/Produtos.vue') 
  }, 
  {
    path: '/carrinho',
    name: 'Carrinho',
    component: () => import(/* webpackChuckName: "Carrinho" */ '@/views/Carrinho.vue') 
  }, 
  {
    path: '/contato',
    name: 'Contato',
    component: () => import(/* webpackChuckName: "Contato" */ '@/views/Contato.vue') 
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),  
  routes
});

export default router;
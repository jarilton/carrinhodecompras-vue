import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChuckName: "Carrinho" */ '@/views/Cart.vue') 
  }, 
  {
    path: '/contacts',
    name: 'Contact',
    component: () => import(/* webpackChuckName: "Contato" */ '@/views/Contacts.vue') 
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),  
  routes
});

export default router;
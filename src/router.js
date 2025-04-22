// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Importa las vistas que quieres usar
import Contact from './components/content/Contact.vue'


const routes = [
  { path: '/contact', component: Contact },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
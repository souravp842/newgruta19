// // src/router/index.js
// import { createRouter, createWebHistory } from 'vue-router'

// // Importa las vistas que quieres usar
// import Contact from './components/content/Contact.vue'


// const routes = [
//   { path: '/contact', component: Contact },

// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

// export default router


// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Import the components you want to use
import Contact from './components/content/Contact.vue'
import Link2 from './components/content/Link2.vue'
import Link3 from './components/content/Link3.vue'
import Link4 from './components/content/Link4.vue'
import Link5 from './components/content/Link5.vue'

const routes = [
  { path: '/contact', component: Contact },
  { path: '/Link2', component: Link2 },
  { path: '/Link3', component: Link3 },
  { path: '/Link4', component: Link4 },
  { path: '/Link5', component: Link5 },

]

const router = createRouter({
  history: createWebHistory('/vue/gruta19-corp/'), // Set base URL here
  routes
})

export default router

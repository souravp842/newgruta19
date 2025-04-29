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


// src/router.js
import { createRouter, createWebHashHistory  } from 'vue-router'

// Import the components you want to use
import Contact from './components/content/Contact.vue'
import Servicios from './components/content/Servicios.vue'
import Link3 from './components/content/Link3.vue'
import Link4 from './components/content/Link4.vue'
import Link5 from './components/content/Link5.vue'
import Espacios from './components/content/Espacios.vue'

const routes = [
  {
    path: '/Espacios', 
    component: Espacios 
  },
  {
     path: '/servicios',
     component: Servicios 
    },
  { 
    path: '/Link3', 
    component: Link3 
  },
  {
    path: '/Link4', 
    component: Link4 
  },
  { path: '/Link5', 
    component: Link5 
  },
];

const router = createRouter({
  history: createWebHashHistory('/vue/gruta19-corp/#/'), // Set base URL here
  routes
})

export default router


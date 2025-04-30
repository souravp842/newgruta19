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
import Galeria from './components/content/Galeria.vue'
import Nosotros from './components/content/Nosotros.vue'
import Promociones from './components/content/Promociones.vue'
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
    path: '/galeria', 
    component: Galeria
  },
  {
    path: '/nosotros', 
    component: Nosotros 
  },
  { path: '/promociones', 
    component: Promociones 
  },
];

const router = createRouter({
  history: createWebHashHistory('/vue/gruta19-corp/#/'), // Set base URL here
  routes
})

export default router


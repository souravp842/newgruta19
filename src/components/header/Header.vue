<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3">
    <div class="container-fluid">
      <!-- Logo -->
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <img src="" alt="Logo" height="30" class="me-2" />
        GRUTA CORP
      </router-link>

      <!-- Toggler (for mobile) -->
      <button
        class="navbar-toggler"
        type="button"
        @click="menuOpen = !menuOpen"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Nav links -->
      <div class="collapse navbar-collapse" :class="{ show: menuOpen }" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="link in navLinks" :key="link.text">
            <a class="nav-link" :href="link.to">{{ link.text }}</a>
          </li>
        </ul>
        
        <!-- Buttons -->
        <div class="d-flex gap-2">
          <button class="btn btn-outline-warning">Agendar visita</button>
          <button class="btn btn-warning">Contratar</button>
        </div>
      </div>
    </div>
  </nav>
</template>


<script>

export default {
  name: 'Navbar',
  data() {
    return {
      menuOpen: false,
      navLinks: [
  { text: 'Espacios', to: "/Contact" },
  { text: 'Servicios', to: '/servicios' },
  { text: 'Galería', to: '/galeria' },
  { text: 'Nosotros', to: '/nosotros' },
  { text: 'Promociones', to: '/promociones' }
]
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script>


<style scoped>
.nav-link {
  font-weight: 500;
  cursor: pointer;
}
.nav-link:hover {
  color: #ffa726 !important;
}
.btn-outline-warning {
  color: #ffa726;
  border-color: #ffa726;
}
.btn-outline-warning:hover {
  background-color: #ffa726;
  color: white;
}
.btn-warning {
  background-color: #ffa726;
  border: none;
}
.btn-warning:hover {
  background-color: #fb8c00;
}
</style>
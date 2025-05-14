<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3">
    <div class="container-fluid">
      <!-- Logo -->
      <router-link to="/" class="navbar-brand d-flex align-items-center">
         <img src="@/assets/images/logo.png" alt="Logo" height="30" class="me-2" @click="menuOpen = false" />
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
            <a class="nav-link" :href="link.to" @click="menuOpen = false">{{ link.text }}</a>
          </li>
        </ul>
        <!-- Buttons -->
        <div class="d-flex gap-2 btn-column">
          <button class="btn btn-outline-warning">Agendar visita</button>
          <button class="btn btn-warning">Contratar</button>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
// const base = import.meta.env.BASE_URL || '/vue/gruta19-corp';
// const base = '/vue/gruta19-corp/';
export default {
  name: 'Navbar',
  data() {
    return {
      menuOpen: false,
      navLinks: [
  { text: 'Espacios', to: '#/espacios'},
  { text: 'Servicios', to: '#/servicios' },
  { text: 'Galería', to: '#/galeria' },
  { text: 'Nosotros', to: '#/nosotros' },
  { text: 'Promociones', to: '#/promociones' }
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
  color: #F97316 !important;
}
.btn-outline-warning {
  color: #F97316;
  border-color: #F97316;
}
.btn-outline-warning:hover {
  background-color: #F97316;
  color: white;
}
.btn-warning {
  background-color: #F97316;
  border: none;
}
.btn-warning:hover {
  background-color: #F97316;
}
/* .navbar{
  position: fixed;
  width: 100%;
} */
nav.navbar .container-fluid {
    max-width: 1280px;
    padding-left: 45px;
    padding-right: 45px;
}
nav.navbar .container-fluid .btn{
  border-radius: 0 !important;
}
nav.navbar {
    background-color: #1C2023 !important;
}
@media(max-width:900px){
  nav.navbar .container-fluid {
    padding-left: 15px;
    padding-right: 15px;
}
.btn-column{
  flex-direction: column;
}
}
</style>












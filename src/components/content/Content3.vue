<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
   <center> <h5>{{ msg }}</h5></center>
    <div class="card-container text-white p-4 rounded">
    <h4>Excutiv Offices</h4>
    <div class="price-display mb-3">
      <span class="price">{{ price }}</span> <span class="currency">MXN</span>
    </div>
    <p class="mb-4 text-muted">Por día</p>

    <ul class="features list-unstyled mb-4">
      <li><i class="bi bi-check-lg text-warning me-2"></i> Acceso de 8am a 8pm</li>
      <li><i class="bi bi-check-lg text-warning me-2"></i> {{ message1 }}</li>
      <li><i class="bi bi-check-lg text-warning me-2"></i> {{ message2 }}</li>
    </ul>

    <button class="btn btn-orange w-100 mb-3">Reservar Ahora</button>
    <button class="btn btn-outline-orange w-100">Ver todos los servicios</button>
  </div>
</template>

<style scoped>
@import '@/assets/main.css';
</style>
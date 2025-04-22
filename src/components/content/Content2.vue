<script setup>
defineProps({
  msg: {
    type: String,
    required: false,
  },
  price: {
    type: [String, Number],
    required: false,
  },
  message1:{
    type: [String, Number],
    required: false
  },
  message2:{
    type: [String, Number],
    required: false
  }

})
</script>


<template>
    <h5>{{ msg }}</h5>
    <div class="card-container text-white p-4 rounded">
    <h4>Day Pass</h4>
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
.card-container {
  background-color: lightgray;
  border-radius: 15px;
  width: 320px;
}
.price-display .price {
  font-size: 2.5rem;
  font-weight: bold;
}
.price-display .currency {
  font-size: 0.9rem;
  margin-left: 5px;
}
.btn-orange {
  background-color: #f57c00;
  color: white;
  border: none;
  font-weight: 500;
}
.btn-orange:hover {
  background-color: #ef6c00;
}
.btn-outline-orange {
  border: 2px solid #f57c00;
  color: #f57c00;
  background: transparent;
  font-weight: 500;
}
.btn-outline-orange:hover {
  background-color: #f57c00;
  color: white;
}
</style>
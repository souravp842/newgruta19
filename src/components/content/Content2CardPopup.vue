<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-card">
      <button class="close-btn" @click="$emit('close')">×</button>
      <h4 class="modal-heading">{{ title }}</h4>
      <div class="price-display">
        <span class="price">{{ price }}</span> <span class="currency">MXN</span>
      </div>
      <p class="por-dia">Por día</p>
      <ul class="modal-list">
        <li><i class="bi bi-check-lg text-warning me-2"></i> Acceso de 8am a 8pm</li>
        <li><i class="bi bi-check-lg text-warning me-2"></i> Areas comunes</li>
        <li><i class="bi bi-check-lg text-warning me-2"></i> Internet da alta velocidad</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    content: String,
    price: String
  }
}
</script>
<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.modal-card {
  background-color: #121212;
  padding: 2rem;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  color: white;
  box-shadow: 0 0 12px rgba(255, 140, 0, 0.4);
  position: relative;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 16px;
  background: none;
  border: none;
  font-size: 22px;
  color: white;
  cursor: pointer;
}
.modal-heading {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
.price-display {
  font-size: 2.5rem;
  font-weight: bold;
  color: #FFA500;
  margin-bottom: 0.3rem;
}
.currency {
  font-size: 1rem;
  margin-left: 5px;
}
.por-dia {
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 1rem;
}
.modal-list {
  list-style: none;
  padding: 0;
}
.modal-list li {
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
}
</style>
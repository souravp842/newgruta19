
<script setup>
defineProps({ 
    image: {
    type: String,
    required: true
  },
  message:{
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="servicios-wrapper">
    <div class="servicios-grid">
      <div class="card">
        <div class="card-content">
          <div class="icon">
            <img :src="image" alt="icon" />
          </div>
          <div class="text">
            <h5>{{ message }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<style scoped>
.servicios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* 3 per row */
  gap: 20px;
}

.card {
  background: #111;
  border-radius: 8px;
  overflow: hidden;
  color: white;
}

.icon img {
  width: 100%;
  height: auto;
  display: block;
}

.card-content {
  padding: 16px;
  text-align: center;
}

</style>
  
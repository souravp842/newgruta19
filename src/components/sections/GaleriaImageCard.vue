
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
    padding: 0px;
    text-align: center;
}
.main_gallery_crd h5 {
    font-family: Inter;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0px;
    padding: 32px;
}
</style>
  
<script setup>
import Content2CardPopup from './Content2CardPopup.vue'
defineProps({
  msg: {
    type: String,
    required: false,
  },
  price: {
    type: [String, Number],
    required: false,
  },
  title:{
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
  },
  price1: {
    type: [String, Number],
    required: false,
  },
  message3:{
    type: [String, Number],
    required: false
  },
  message4:{
    type: [String, Number],
    required: false
  },
    message5:{
    type: [String, Number],
    required: false
  }
})
</script>
<script>
export default {
  props: ['price', 'message2', 'modalContent'],
  data() {
    return {
      showModal: false
    };
  }
}
</script>
<template>
  <div class="card-container text-white">
    <h4 class="card-title">{{ title }}</h4>
    <div class="price-display">
      <p class="por-dia">{{ message5 }}</p>
      <span class="price">{{ price }}</span> <span class="currency">MXN</span>
    </div>
    <p class="por-dia">{{ message4 }}</p>
    <ul class="features list-unstyled mt-4 mb-4">
      <li><i class="bi bi-check-lg text-warning me-2"></i> {{ message1 }}</li>
      <li><i class="bi bi-check-lg text-warning me-2"></i> {{ message2 }}</li>
      <li><i class="bi bi-check-lg text-warning me-2"></i> {{ message3 }}</li>
    </ul>
    <button class="btn btn-orange w-100 mb-3" @click="showModal = true">Reservar Ahora1</button>
    <!-- Show Popup Button -->
    <button class="btn btn-outline-orange w-100" >
      Ver todos los servicios
    </button>
    <!-- Modal -->
    <Content2CardPopup
  v-if="showModal"
  :title="'Day Pass'"
  :content="'modalContent'"
  :price="'$350'"
  @close="showModal = false"
/>
  </div>
</template>
<style scoped>
@import '@/assets/main.css';
.an-pass-section {
    background: #1C2023;
    padding: 80px 0;
}
.an-pass-wraper {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 45px;
}
h4.card-title {
      font-family: "Voltaire", sans-serif;  
}
ul.features li {
    font-size: 20px;
    font-family: "Voltaire", sans-serif;
    line-height: 32px;
}

.price-display .price[data-v-8782ac84] {
    font-weight: 500;
    font-family: 'Voltaire';
}
p.por-dia {
    font-size: 20px;
    font-family: 'Official Book';
    font-weight: 400;
    color: #FFFFFFCC;
    margin-bottom: -8px;
}
.an-pass-wraper h5 {
    color: #FFFFFF;
    text-align: center;
    font-size: 50px;
    line-height: 100%;
    letter-spacing: 0;
    font-family: "Voltaire", sans-serif;
}
.an-pass-card-wraper {
    margin-top:40px;
    display: flex;
    gap: 48px;
    align-items: stretch;
    justify-content: flex-start;
}
.an-pass-card-wraper .card-container {
    width: 50%;
    background: #0C0C0D;
    border-radius: 16px;
    padding: 30px;
}
.an-pass-card-wraper .card-container h4 {
    color: #FFFFFF;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0;
    font-family: "Voltaire", sans-serif;
    font-weight: 400;
}
.an-pass-card-wraper .card-container span.price {
    font-family: "Voltaire", sans-serif;
    color: #FFFFFF;
    font-size: 48px;
    font-weight: 400 !important;
    line-height: norma70px;
    letter-spacing: 0;
}
.an-pass-card-wraper .card-container span.currency {
    color: #FFFFFFCC;
    font-size:14px;
    line-height:14px;
    letter-spacing: 0;
    font-family: "Voltaire", sans-serif;
    margin-left: 0 !important;
}
.an-pass-card-wraper .card-container p.por-dia {
    color: #FFFFFFCC;
    font-family: Official Book;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0;
    padding-top: 1px;
}
.an-pass-card-wraper .card-container ul.features {
    margin: 32px 0 !important;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.an-pass-card-wraper .card-container ul.features li {
    position: relative;
    padding-left:17px;
    font-family: "Voltaire", sans-serif;
    color: #FFFFFF;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0;
}
.an-pass-card-wraper .card-container ul.features li:before {
    content: "";
    width: 14px;
    height: 8px;
    border: 2px solid #F97316;
    display: inline-block;
    position: absolute;
    left: 1px;
    top: 0px;
    border-top: unset;
    border-right: unset;
    transform: rotate(-45deg);
}
.an-pass-card-wraper .card-container .btn {
    border-radius: 0;
    padding: 15px;
    font-family: Official Book;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
}
 button.btn {
    height: 48px;
}
/* responsive */
@media(max-width:850px){
  .an-pass-section {
    padding: 64px 0;
}
  .an-pass-card-wraper {
    flex-direction: column;
    gap: 32px;
}
.an-pass-wraper {
    padding: 0 15px;
}
.an-pass-card-wraper .card-container {
    width: 100%;
    padding: 34px 16px;
}
.an-pass-wraper h5 {
    line-height: 64px;
}
}
/* MOdel style */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-box {
  background: #111;
  color: white;
  padding: 30px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  position: relative;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}
</style>
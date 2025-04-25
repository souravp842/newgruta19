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
  }

})
</script>


<template>
   <div class="an-pass-section">
    <div class="an-pass-wraper">
    <h5>{{ msg }}</h5>
    <div class="an-pass-card-wraper">
      <!-- card-1 start -->
    <div class="card-container text-white ">
    <h4>Day Pass</h4>
    <div class="price-display">
      <span class="price">{{ price }}</span> <span class="currency">MXN</span>
    </div>
    <p class="por-dia">Por día</p>

    <ul class="features list-unstyled mb-4">
      <li><i class="bi bi-check-lg text-warning me-2"></i> Acceso de 8am a 8pm</li>
      <li><i class="bi bi-check-lg text-warning me-2"></i> {{ message1 }}</li>
      <li><i class="bi bi-check-lg text-warning me-2"></i> {{ message2 }}</li>
    </ul>

    <button class="btn btn-orange w-100 mb-3">Reservar Ahora</button>
    <button class="btn btn-outline-orange w-100">Ver todos los servicios</button>
  </div>
  <!-- card-1 end -->
  <!-- card-2 start -->
  <div class="card-container text-white ">
    <h4>Day Pass</h4>
    <div class="price-display">
      <span class="price">{{ price1 }}</span> <span class="currency">MXN</span>
    </div>
    <p class="por-dia">Por día</p>

    <ul class="features list-unstyled mb-4">
      <li><i class="bi bi-check-lg text-warning me-2"></i> Acceso de 8am a 8pm</li>
      <li><i class="bi bi-check-lg text-warning me-2"></i> {{ message3 }}</li>
      <li><i class="bi bi-check-lg text-warning me-2"></i> {{ message4 }}</li>
    </ul>

    <button class="btn btn-orange w-100 mb-3">Reservar Ahora</button>
    <button class="btn btn-outline-orange w-100">Ver todos los servicios</button>
  </div>
    <!-- card-2 end -->
</div>
</div>
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
.an-pass-wraper h5 {
    color: #ffffff;
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
    color: #ffffff;
    font-size: 48px;
    font-weight: 400 !important;
    line-height: normal;
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
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0;
    font-family: "Voltaire", sans-serif;
}
.an-pass-card-wraper .card-container ul.features {
    margin: 30px 0 !important;
    display: flex;
    flex-direction: column;
    gap:15px;
}
.an-pass-card-wraper .card-container ul.features li {
    position: relative;
    padding-left:17px;
    font-family: "Voltaire", sans-serif;
    color: #ffffff;
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
    font-size: 18px;
    line-height: 18px;
    padding: 15px;
}
/* responsive */
@media(max-width:850px){
  .an-pass-section {
    padding: 30px 0;
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
}
</style>

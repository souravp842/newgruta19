<script setup>
import Content2Card from './Content2Card.vue'
defineProps({
  msg: {
    type: String,
    required: false,
  }
})
</script>


<template>
 
   <div class="an-pass-section">
    <div class="an-pass-wraper">
    <h5>{{ msg }}</h5>
    <div class="an-pass-card-wraper">
      <!-- card-1 start -->
        <Content2Card price="$350" message1="Areas comunes" message2="Internet da alta velocidad" price1="$3,500" message3="Hora de sala de juntas 6 personas / mes" message4="Sala de juntas one to one" message5="Day Pass"  message6="Por días" />
  <!-- card-1 end -->
  <!-- card-2 start -->
 
    <Content2Card price="$3,500" message1="1 hora de sala de juntas 6 personas / mes" message2="Sala de juntas one to one"  message5="Monthly Pass"  message6="30 días"/>
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
    font-family: Official Book;
    font-weight: 400;
    font-size: 20px;
    line-height: 16px;
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
    padding: 15px;
    font-family: Official Book;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
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

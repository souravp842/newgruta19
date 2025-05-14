<script setup>
import Content3Card from './Content3Card.vue'
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div class="an-offices-section">
    <div class="an-offices-wraper">
    <h5>{{ msg }}</h5>
    <div class="an-offices-card-wraper">
      <!-- card-1 start -->
      <Content3Card title="Executive Offices" price="$12,500" message1="Acceso a las instalaciones de Gruta 24 7, los 365 días del año." message2="Atención personalizada a visitas" message3="Horas de Salas de Juntas."/>
      <!-- card-1 end -->
      <!-- card-2 start -->
      <Content3Card title="Virtual Offices" price="$6,200" message1="Recepción de 8:00 am a 8:00 pm" message2="Toma de mensajes y envío por correo" message3="Atención personalizada a visitas"/>
      <!-- card-2 end -->
</div>
</div>
</div>
</template>
<style scoped>
@import '@/assets/main.css';
.an-offices-section {
    background: #1C2023;
    padding: 30px 0 80px;
}
.an-offices-wraper {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 45px;
}
.an-offices-wraper h5 {
    color: #FFFFFF;
    letter-spacing: 0;
    font-family: Voltaire;
    font-weight: 400;
    font-size: 50px;
    line-height: 100%;
    text-align: center;
    text-transform: uppercase;
}
.an-offices-card-wraper {
    margin-top: 35px;
    display: flex;
    gap: 48px;
    align-items: stretch;
    justify-content: flex-start;
}
.an-offices-card-wraper .card-container {
    width: 50%;
    background: #0C0C0D;
    border-radius: 16px;
    padding: 30px;
}
.an-offices-card-wraper .card-container h4 {
    color: #FFFFFF;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0;
    font-family: "Voltaire", sans-serif;
    font-weight: 400;
}
.an-offices-card-wraper .card-container span.price {
    font-family: "Voltaire", sans-serif;
    color: #FFFFFF;
    font-size: 48px;
    font-weight: 400 !important;
    line-height: normal;
    letter-spacing: 0;
}
.an-offices-card-wraper .card-container span.currency {
    color: #FFFFFFCC;
    font-size:14px;
    line-height:14px;
    letter-spacing: 0;
    font-family: "Voltaire", sans-serif;
    margin-left: 0 !important;
}
.an-offices-card-wraper .card-container p.por-dia {
    color: #FFFFFFCC;
    font-family: Official Book;
    font-weight: 400;
    font-size: 20px;
    line-height: 16px;
    letter-spacing: 0;
    padding-top: 5px;
}
.an-offices-card-wraper .card-container ul.features {
    margin: 32px 0 !important;
    display: flex;
    flex-direction: column;
    gap:16px;
}
.an-offices-card-wraper .card-container ul.features li {
    position: relative;
    padding-left:17px;
    font-family: "Voltaire", sans-serif;
    color: #FFFFFF;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0;
}
.an-offices-card-wraper .card-container ul.features li:before {
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
.an-offices-card-wraper .card-container .btn {
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
  .an-offices-section {
    padding: 40px 0 64px;
}
  .an-offices-card-wraper {
    flex-direction: column;
    gap: 32px;
}
.an-offices-wraper {
    padding: 0 15px;
}
.an-offices-card-wraper .card-container {
    width: 100%;
    padding: 34px 16px;
}
.an-offices-wraper h5 {
    line-height: 64px;
}
}
</style>
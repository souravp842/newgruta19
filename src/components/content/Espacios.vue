<script setup>
import { ref } from 'vue';
import EspaciosCard from '@/components/sections/EspaciosCard.vue'
import baja from '@/assets/images/baja.png'; 
import nivel from '@/assets/images/nivel.png';
import nivel2 from '@/assets/images/nivel2.png';
import sala from '@/assets/images/sale.png';

</script>

<template>
    <section class="text-white py-20 text-center espacios_main" style="background-color: #1C2023;">
        <div class="membresías">
      <h2 class="text-4xl md:text-5xl font-bold tracking-wide uppercase mb-6 flex justify-center items-center gap-2">
        <span>NUESTR</span>
        <span class="inline">
            <!-- <img class="an-top-event-image" :src="image"/> -->
        </span>
        <span>S ESPACIOS<span class="text-orange-500">.</span></span>
      </h2>
  <div class="eleva_entorno">
     <center> <p class="max-w-2xl mx-auto text-sm md:text-base mb-10 leading-relaxed">
        Eleva tu productividad en un entorno moderno, cómodo y completamente equipado.<br>
        Nuestras membresías te brindan acceso a un workspace funcional con internet de alta<br>
        velocidad, recepción, estación de café y más beneficios que impulsan tu día a día.<br>
        Conéctate, crea y trabaja sin límites en un espacio diseñado para el éxito.<br>
      </p></center>
  </div>
      <button
        class="bg-yellow-400  font-semibold px-6 py-3 shadow hover:bg-yellow-300 transition"
      >
        Ver Tour Virtual 360°
      </button>
<<<<<<< HEAD
        <EspaciosCard message="Donode la creativided y la colaboracion toman forma" :image="baja" />
        <EspaciosCard message="default message":image="nivel"/>
=======
    </div>
      <EspaciosCard message="message first" :image="baja" />
      <EspaciosCard message="default message":image="nivel"/>
>>>>>>> 11d98d5a3ae9886b12f419bbad013884da8a3e71
        <EspaciosCard message="message third" :image="nivel2"/>
       <EspaciosCard message="message third" :image="sala"/>



    </section>

 <section class="listo_para_elevar text-white text-center py-20">
  <h2 class="text-3xl md:text-4xl font-bold uppercase mb-4 tracking-wide">
    Listo para elevar tu espacio de trabajo
  </h2>
  <p class="text-base md:text-lg mb-8">
    Agenda una visita y conoce personalmente nuestras instalaciones
  </p>
  <button
    class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 transition duration-300"
  >
    Iniciar Tour Virtual
  </button>
</section>
  </template>
  



<style scoped>
@import '@/assets/main.css';
.an-event-section {
    background: #1C2023;
    padding: 50px 0;
}
.an-event-section h3.an-event-head {
    color: #ffffff;
    text-align: center;
    font-size: 50px;
    line-height: 100%;
    letter-spacing: 0;
    font-family: "Voltaire", sans-serif;
}
.an-event-container {
    margin: 30px auto 0 auto;
    max-width: 1280px;
    padding: 0 45px;
}
.an-event-container .row {
    display: flex;
    align-items: stretch;
    gap: 0;
    width:100%;
    flex-wrap: nowrap;
}
.an-event-container  .an-event-left {
    width: 100%;
    max-width: 440px;
    margin: 0;
    padding: 0;
}
.an-event-container  .an-event-right {
    width:100%;
    flex-shrink: unset;
    padding: 32px;
    background:#0C0C0D !important;
    display: flex;
    flex-direction: column;
}
.an-event-container  .an-event-left img.an-top-event-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 0;
}
h3.an-event-title {
    margin-bottom: 30px;
    color: #FFFFFF;
    font-size: 24px;
    font-family: "Voltaire", sans-serif;
    line-height: 24px;
}
p.an-event-subtitle {
    font-size: 20px;
    color: #D9E2F0;
    line-height: 100%;
    letter-spacing: 0;
    font-family: "Voltaire", sans-serif;
    margin-bottom: 30px;
}
.an-event-list-wraper {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    justify-content: space-between;
}
.an-event-list span {
    position: relative;
    padding-left: 25px;
    font-family: "Voltaire", sans-serif;
    color: #ffffff;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0;
}
.an-event-list span:before {
    content: "";
    width: 14px;
    height: 8px;
    border: 2px solid #F97316;
    display: inline-block;
    position: absolute;
    left: 1px;
    top: 3px;
    border-top: unset;
    border-right: unset;
    transform: rotate(-45deg);
}
.an-event-inner-row {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}
.col-sm.an-button-wraper {
    margin-top: auto;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    gap: 24px;
}
.an-button-wraper .btn {
    border-radius: 0 !important;
    width: max-content !important;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: normal;
    padding: 9px 30px;
    min-height: 43px;
}
.espacios_main span {
    color: #ffffff;
    font-size: 66px;
    line-height: 86px;
    letter-spacing: 0;
    font-family: "Voltaire", sans-serif;
    margin: 0 0 32px 0;
    max-width: 520px;
}
.membresías {
    padding-top: 157px;
    padding-right: 10px;
    padding-bottom: 120px;
    padding-left: 10px;
}
.eleva_entorno p {
    font-family: Voltaire;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0;
    text-align: center;
    margin: 25px 0px;
}
.espacios_main button {
    background: #F97316;
    color: #ffffff;
    font-family: "Voltaire", sans-serif;
    padding: 16px 30px;
    font-size: 26px;
    line-height: 100%;
    letter-spacing: 0;
    border: navajowhite;
}
section.text-white.py-20.text-center.espacios_main {
    padding-bottom: 72px;
}
section.listo_para_elevar {
    background: #111827;
    padding: 80px 16px;
}

section.listo_para_elevar h2 {
    font-family: Voltaire;
    font-weight: 400;
    font-size: 50px;
    line-height: 62px;
    letter-spacing: 0;
    text-align: center;
    text-transform: uppercase;
}
section.listo_para_elevar p {
    font-family: Voltaire;
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
    padding-bottom: 50px;
}
section.listo_para_elevar button {
    padding-right: 30px;
    padding-left: 30px;
    background: #F97316;
    font-family: Official Book;
    font-weight: 400;
    font-size: 26px;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
    border: 0;
}

@media(max-width:1100px){
    .an-event-container .row {
    flex-direction: column;
    margin: 0 auto;
}
.an-event-list-wraper {
    flex-direction: column;
    gap: 0;
}
.an-event-list-wraper span {
    margin-bottom: 10px;
    display: inline-block;
}
.col-sm.an-button-wraper {
    flex-direction: column;
}
.an-button-wraper .btn {
    /* width: 100% !important; */
    padding: 9px 15px;
}
.col-sm.an-button-wraper {
    margin-top: 10px;
}
.an-event-container {
    padding: 0 15px;
}
.an-event-container  .an-event-left {
    max-width:100%;
}
.an-event-container  .an-event-left img.an-top-event-image {
    max-height: 400px;
}
}
@media(max-width:767px) {
    .membresías {
    padding-top: 64px;
    padding-bottom: 64px;
}
.espacios_main button {
    padding: 12px 30px !important;
    width: 100%;
}
section.listo_para_elevar {
    background: #111827;
    padding: 80px 16px 52px;
}
section.listo_para_elevar p{ 
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0;
    padding-bottom: 50px;
}
section.listo_para_elevar button {
    width: 100%;
}
}
</style>
  
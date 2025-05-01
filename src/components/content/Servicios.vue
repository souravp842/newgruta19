<template>
<section class="que_mereces text-white text-center py-20 px-4">
  <!-- Title with icon -->
  <div class="que_mereces_wider text-4xl md:text-5xl font-semibold uppercase tracking-wider mb-2">
    <span>Todo</span>
      <img src="@/assets/images/icon.png" alt="Logo" class="w-8 h-8 inline-block" />
    <span>Lo</span>
  </div>
  <div class="que_mereces_tracking text-4xl md:text-5xl font-semibold uppercase tracking-wider mb-4">
    Que <span class="text-white">Mereces</span><span class="text-orange-500">.</span>
  </div>
<div class="servicios_membresía">
  <p class="ser_membresía text-sm md:text-base text-gray-300 mb-6">
    Servicios premium incluidos en tu membresía
  </p>
  <p class="productividad max-w-2xl mx-auto text-sm md:text-base text-gray-300 leading-relaxed">
    En GRUTA 19 CORP entendemos que el éxito requiere un balance entre productividad y<br> estilo.
    Por eso, hemos creado un espacio que combina la exclusividad con una amplia<br> variedad de servicios,
    diseñados para que seas tan eficiente en tu trabajo como desees.
  </p>
  </div>
</section>

<!-- START SERVICIOS INCLUIDOS -->
<div class="servicios_sections_ct">
<div class="t2 min-h-screen bg-gray-900 flex flex-col md:flex-row gap-4 p-6">
  <center><h2>SERVICIOS INCLUIDOS</h2></center>
    <ServiceCard/>
    <center><h2 class="title">SERVICIOS ADICIONALES</h2></center>
    <ServiciodAdicionalesCard /> 
    <ServiciosPremiumCard/> 
</div>
</div>
  </template>


<script>
import ServiciodAdicionalesCard from '@/components/sections/ServiciodAdicionalesCard.vue'
import ServiciosPremiumCard from '@/components/sections/ServiciosPremiumCard.vue'
 import ServiceCard from "@/components/sections/ServiciosCard.vue";
export default {
  components: {
    ServiceCard,
    ServiciodAdicionalesCard,
    ServiciosPremiumCard
  }
}

</script>
<style>
section.que_mereces {
    padding-top: 157px;
    padding-right: 10px;
    padding-bottom: 80px;
    padding-left: 10px;
    background-color: #1c2023;
}
.que_mereces_wider {
    color: #ffffff;
    font-size: 66px;
    line-height: 45px;
    letter-spacing: 0;
    font-family: "Voltaire", sans-serif;
    margin: 0px !important;
    max-width: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.que_mereces_tracking {
    color: #ffffff;
    font-size: 66px;
    line-height: 86px;
    letter-spacing: 0;
    font-family: "Voltaire", sans-serif;
    max-width: 520px;
    margin: 0 auto;
    text-transform: uppercase;
}
.servicios_membresía .ser_membresía {
    font-family: Voltaire;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
    margin-bottom: 25px;
}
.servicios_membresía .productividad {
    font-family: Official Book;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0;
    text-align: center;
}
.servicios_sections_ct {
    background-color: #1c2023;
    color: #fff;
    padding-top: 72px;
    padding-right: 64px;
    padding-bottom: 72px;
    padding-left: 64px;
}
</style>
<!-- END SERVICIOS INCLUIDOS -->


<!-- START SERVICIOS ADICIONALES -->

  
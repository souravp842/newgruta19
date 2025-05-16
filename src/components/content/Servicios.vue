<template>
  <section class="que_mereces text-white text-center py-20 px-4">
    <!-- Title with icon -->
    <div class="que_mereces_wider text-4xl md:text-5xl font-semibold uppercase tracking-wider mb-2">
      <span>Tod</span>
        <img src="@/assets/images/icon.png" alt="Logo" class="w-8 h-8 inline-block" />
      <span>Lo <span class="d-md-none ">Que</span></span>
    </div>
    <div class="que_mereces_tracking text-4xl md:text-5xl font-semibold uppercase tracking-wider mb-4"> <span class="d-none d-md-inline">
      Que </span> <span class="text-white">Mereces</span><span class="text-orange-500">.</span>
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
  <div class="t2 maxsection min-h-screen bg-gray-900 flex flex-col md:flex-row gap-4 p-6">
    <center><h2>SERVICIOS INCLUIDOS</h2></center>
      <ServiceCard/>
      <div class="serviciod_adicionales_card">
      <center><h2 class="title">SERVICIOS ADICIONALES</h2></center>
      <ServiciodAdicionalesCard /> 
      </div>
  </div>
  </div>
  <div class="servicios_premium_card">
    <ServiciosPremiumCard/> 
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
      color:#D9E2F0;
  }
  .servicios_membresía .productividad {
      font-family: Voltaire;
      font-weight: 400;
      font-size: 20px;
      line-height: 20px;
      letter-spacing: 0;
      text-align: center;
      color:#D9E2F0;

  }
  .servicios_sections_ct {
      background-color: #1c2023;
      color: #fff;
      padding-top: 80px;
      padding-right: 64px;
      padding-bottom: 72px;
      padding-left: 64px;
  }

  .servicios_sections_ct h2 {
      font-family: Voltaire;
      font-weight: 400;
      font-size: 50px;
      line-height: 100%;
      letter-spacing: 0;
      text-align: center;
      text-transform: uppercase;
  }
  .serviciod_adicionales_card {
      padding-top: 72px;
      /* padding-bottom: 72px; */
      background-color: #1c2023;
  }
  .serviciod_adicionales_card .servicios-wrapper {
      padding-bottom: 0px;
  }
  .servicios_premium_card {
      background: #111827;
      padding: 80px 16px;
  }
  span.text-orange-500 {
    color: #f97316 !important;
}
.t2.maxsection {
    max-width: 1600px;
    margin: auto;
}
  @media(max-width:767px) {
    section.que_mereces {
      padding-top: 64px;
      padding-bottom: 64px;
  }
  .servicios_sections_ct center {
      padding-top: 80px;
      padding-bottom: 52px;
  }
  .servicios_membresía .productividad {
      line-height: 25px;
  }
  .servicios_sections_ct {
      padding-top: 0px;
      padding-right: 16px;
      padding-bottom:0px;
      padding-left: 16px;
  }
  .servicios_sections_ct .servicios-wrapper {
      padding: 0;
  }
  .servicios_sections_ct h2 {
      line-height: 62px;
  }
  .servicios_membresía .productividad br {
    display: none;
}
  
  }
  @media(max-width:400px){
  .que_mereces_wider{
     gap:5px;
  }
  }
  </style>
  <!-- END SERVICIOS INCLUIDOS -->
  
  
  <!-- START SERVICIOS ADICIONALES -->
  
    
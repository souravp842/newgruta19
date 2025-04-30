<template>
<section class="bg-black text-white text-center py-20 px-4">
  <!-- Title with icon -->
  <div class="text-4xl md:text-5xl font-semibold uppercase tracking-wider mb-2">
    <span>Todo</span>
    <span class="inline-block mx-2 align-middle">
      <img src="@/assets/images/icon.png" alt="Logo" class="w-8 h-8 inline-block" />
    </span>
    <span>Lo</span>
  </div>

  <div class="text-4xl md:text-5xl font-semibold uppercase tracking-wider mb-4">
    Que <span class="text-white">Mereces</span><span class="text-orange-500">.</span>
  </div>

  <!-- Subheadline -->
  <p class="text-sm md:text-base text-gray-300 mb-6">
    Servicios premium incluidos en tu membresía
  </p>

  <!-- Description -->
  <p class="max-w-2xl mx-auto text-sm md:text-base text-gray-300 leading-relaxed">
    En GRUTA 19 CORP entendemos que el éxito requiere un balance entre productividad y<br> estilo.
    Por eso, hemos creado un espacio que combina la exclusividad con una amplia<br> variedad de servicios,
    diseñados para que seas tan eficiente en tu trabajo como desees.
  </p>
</section>

<!-- START SERVICIOS INCLUIDOS -->

<div class="t2 min-h-screen bg-gray-900 flex flex-col md:flex-row gap-4 p-6">
  <center><h2>SERVICIOS INCLUIDOS</h2></center>
    <ServiceCard/>
    <center><h2 class="title">SERVICIOS ADICIONALES</h2></center>
    <ServiciodAdicionalesCard /> 
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

<!-- END SERVICIOS INCLUIDOS -->


<!-- START SERVICIOS ADICIONALES -->

  
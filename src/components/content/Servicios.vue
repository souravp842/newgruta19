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
    <ServiceCard
      v-for="(item, index) in services"
      :key="index"
      :icon="item.icon"
      :title="item.title"
      :description="item.description"
    />
<ServiciodAdicionalesCard/>    

  </div>

  </template>


<script>
  import ServiciodAdicionalesCard from '@/components/sections/ServiciodAdicionalesCard.vue'

 import ServiceCard from "@/components/sections/ServiciosCard.vue";
import IconReception from '@/assets/images/logo.png'
import IconMail from '@/assets/images/icon.png'

export default {
  components: {
    ServiceCard,
    ServiciodAdicionalesCard
  },
  data() {
    return {
      services: [
        {
          icon: IconReception,
          title: 'RECEPCIÓN PROFESIONAL',
          description: 'Personal capacitado para atender todas tus necesidades administrativas.'
        },
        {
          icon: IconMail,
          title: 'MENSAJERÍA Y PAQUETERÍA',
          description:
            'Servicio de recepción y envío de correspondencia y paquetes a nivel nacional e internacional. (Para Executive offices, oficina virtual y privada)'
        },
        {
          icon: IconMail,
          title: 'SALA ONE TO ONE',
          description:
            'Ideal para entrevistas, consultas y reunions privadas.'
        },
        {
          icon: IconMail,
          title: 'ATENCION EXCLUSIVA',
          description:
            'Servicos personalizado para atender todos tus necesidades empresarials'
        }

      ]
    }
  }
}

</script>

<!-- END SERVICIOS INCLUIDOS -->


<!-- START SERVICIOS ADICIONALES -->


<!-- <template> -->
    <!-- <div class="min-h-screen bg-gray-900 p-6">
      <div class="flex flex-col md:flex-row gap-4"> -->
        <!-- <ServiciodAdicionalesCard/> -->
      <!-- </div>
    </div> -->
  <!-- </template> -->
  
  <!-- <script> -->
//   import ServiciodAdicionalesCard from '@/components/sections/ServiciodAdicionalesCard.vue'

//   import ServiceCard from "@/components/sections/ServiciosCard.vue";
  
//   export default {
//     components: { TextCard },
//     data() {
//       return {
//         cards: [
//           {
//             title: 'COFFEE BREAK',
//             description: 'Servicio de catering para eventos y reuniones importantes.'
//           },
//           {
//             title: 'VALET PARKING',
//             description: 'Servicio personalizado de estacionamiento para ti y tus visitantes.'
//           },
//           {
//             title: 'LOCKERS PRIVADOS',
//             description: 'Espacio seguro para almacenar tus pertenencias personales.'
//           }
//         ]
//       }
//     }
//   }
  <!-- </script> -->


<!-- END SERVICIOS ADICIONALES -->
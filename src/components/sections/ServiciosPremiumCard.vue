<template>
  <div class="crd2 text-white py-16 text-center">
    <h2 class="text-3xl md:text-4xl font-semibold mb-4">
      ¿INTERESADO EN NUESTROS SERVICIOS?
    </h2>
    <p class="mb-8 text-lg md:text-base text-gray-300">
      Contáctanos para obtener más información sobre nuestros servicios premium
    </p>
    <div class="main_btn_flex flex justify-center gap-4 flex-wrap">
      <button
        class="solicitar_información bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6  transition"
      >
        Solicitar Información
      </button>
      <button
        class="llamar_ahora border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium py-3 px-6  transition"
      >
        Llamar Ahora
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "InterestedServices",
};
</script>
<style scoped>
/* .crd2{
  background-color: black;
} */
.servicios_premium_card h2 {
  font-family: Voltaire;
  font-weight: 400;
  font-size: 50px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
}
.servicios_premium_card p {
  padding-bottom: 50px;
  font-family: Voltaire;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  margin: 0;
  color:#D9E2F0;
}
.servicios_premium_card .main_btn_flex {
  display: flex;
  justify-content: center;
}
.servicios_premium_card button.solicitar_información {
  padding-right: 30px;
  padding-left: 30px;
  background: #F97316;
  font-family: Official Book;
  font-weight: 400;
  font-size: 26px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  border: 2px solid #f97316 !important;
  border: 0;
}
button.llamar_ahora.border {
  border: 2px solid #F97316 !important;
  outline: unset;
  background: transparent;
  color: #F97316;
  padding: 16px 30px;
  font-family: Official Book;
  font-weight: 400;
  font-size: 26px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
}
@media(max-width:767px) {
button.llamar_ahora.border, .servicios_premium_card button.solicitar_información {
  width: 100%;
}
.servicios_premium_card .main_btn_flex{ 
  gap: 20px !important;
}
.servicios_premium_card h2{ 
  line-height: 62px;
}
.servicios_premium_card p {
  line-height: 25px;
  font-size: 20px;
}
.servicios_premium_card {
  background: #111827;
  padding: 80px 16px 52px;
}
}
</style>
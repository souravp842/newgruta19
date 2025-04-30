<script setup>
import NosotrosamenidadesCard from '@/components/sections/NosotrosamenidadesCard.vue'

</script>
<template>
    <div class="text-section">
      <h1 class="main-heading">
        EL P<span class="orange-icon">◉</span>DER SE <br />
        ENCUENTRA AQUÍ<span class="orange-dot">.</span>
      </h1>
      <p class="subheading">
        GRUTA 19 CORP redefine la experiencia laboral con un entorno <br />
        exclusivo, diseñado para líderes y visionarios. <br />
        Más que una oficina, es un espacio premium donde la estrategia y <br />
        la innovación toman forma en un ambiente de lujo discreto, <br />
        diseño minimalista y servicios de alta gama.
      </p>
    </div>

<!-- START UBACACION ESTRATEGICA SECTION -->
<div class="location-section">
    <div class="location-content">
      <div class="text-box">
        <h2>UBICACIÓN ESTRATÉGICA</h2>
        <div class="address-box">
          <h4>Dirección</h4>
          <p>
            Nos encontramos en una de las zonas más exclusivas de la ciudad:
          </p>
          <p class="location-line">
            <span class="location-icon"></span>
            Cerrada de Gruta 19, Jardines del Pedregal, Álvaro Obregón 01900
          </p>
        </div>
      </div>
      <div class="map-box">
        <img src="@/assets/images/img.png" alt="Mapa" />
      </div>
    </div>
  </div>
<!-- END UBACACION ESTRATEGICA SECTION -->

<!-- START AMENIDADES SECTIONS -->
<NosotrosamenidadesCard/>
<!-- START AMENIDADES SECTIONS -->
  </template>
  
  <style scoped>
.text-section {
  background-color: #1a1d1d;
  color: white;
  text-align: center;
  padding: 80px 20px;
  font-family: 'Helvetica Neue', sans-serif;
}

.main-heading {
  font-size: 42px;
  font-weight: bold;
  letter-spacing: 1.5px;
  line-height: 1.3;
  margin-bottom: 24px;
}

.orange-icon {
  color: #f37021;
  font-size: 38px;
  display: inline-block;
  vertical-align: middle;
  margin: 0 4px;
}

.orange-dot {
  color: #f37021;
  font-size: 36px;
}

.subheading {
  font-size: 14px;
  color: #ccc;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

/* Start UBACACION ESTRATEGICA SECTION css */

.location-section {
  background-color: #1a1d1d;
  padding: 60px 20px;
  color: white;
  font-family: 'Helvetica Neue', sans-serif;
}

.location-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 0 auto;
  gap: 30px;
}

.text-box {
  flex: 1;
  min-width: 300px;
}

.address-box {
  background-color: #111314;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
}

.address-box h4 {
  font-weight: bold;
  margin-bottom: 10px;
}

.address-box p {
  font-size: 14px;
  color: #ccc;
  margin: 8px 0;
}

.location-line {
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
}

.location-icon {
  color: #f37021;
  font-size: 16px;
}

.map-box {
  flex: 1;
  min-width: 300px;
}

.map-box img {
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  object-fit: cover;
}


</style>
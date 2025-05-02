<script setup>
import NosotrosamenidadesCard from '@/components/sections/NosotrosamenidadesCard.vue'

</script>


<!-- <template>
    <div class="text-section experiencia_sect">
      <h1 class="main-heading">
        EL P<img src="/src/assets/images/icon.png" >DER SE <br />
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
 START UBACACION ESTRATEGICA SECTION
<div class="location-section_map">
  <div class="location-section">
  <h2>UBICACIÓN ESTRATÉGICA</h2>
    <div class="location-content">
      <div class="text-box">
        <div class="address-box">
          <h4>Dirección</h4>
          <p>
            Nos encontramos en una de las zonas más exclusivas de la ciudad:
          </p>
          <p class="location-line"><img src="/src/components/icons/location-icon.svg" alt="">
            Cerrada de Gruta 19, Jardines del Pedregal, Álvaro Obregón 01900
          </p>
        </div>
      </div>
      <div class="map-box">
        <img src="@/assets/images/map-img.png" alt="Mapa" />
      </div>
    </div>
    </div>
  </div>
<NosotrosamenidadesCard/>
  </template> 
   -->
   <template>
    <div class="text-section experiencia_sect">
      <h1 class="main-heading">
        EL P<img src="/src/assets/images/icon.png">DER SE <br />
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
  
    <!-- START UBICACION ESTRATEGICA SECTION -->
    <div class="location-section_map">
      <div class="location-section">
        <h2>UBICACIÓN ESTRATÉGICA</h2>
        <div class="location-content">
          <div class="text-box">
            <div class="address-box">
              <h4>Dirección</h4>
              <p>
                Nos encontramos en una de las zonas más exclusivas de la ciudad:
              </p>
              <p class="location-line">
                <img src="/src/components/icons/location-icon.svg" alt="Icono ubicación">
                Cerrada de Gruta 19, Jardines del Pedregal, Álvaro Obregón 01900
              </p>
            </div>
          </div>
          <div class="map-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.3356247020617!2d-99.20725052567112!3d19.44137838183356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce013a591a04f7%3A0xc507bd1a75b1d76c!2sCerrada%20de%20Gruta%2019%2C%20Jardines%20del%20Pedregal%2C%20%C3%81lvaro%20Obreg%C3%B3n%2C%2001900%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sus!4v1714650277341!5m2!1sen!2sus"
              width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>

    <NosotrosamenidadesCard />
  </template>


  <style scoped>
.text-section {
    background-color: #1c2023;
    color: white;
    text-align: center;
    padding: 157px 10px;
}

.main-heading {
    font-size: 66px;
    line-height: 86px;
    letter-spacing: 0;
    font-family: "Voltaire", sans-serif;
    max-width: 520px;
    margin: 0 auto;
    text-transform: uppercase;
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
    font-size: 75px;
}
.subheading {
    font-family: Voltaire;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0;
    text-align: center;
    margin-top: 25px;
}

.location-section {
    width: 1200px;
    margin: 0 auto;
    max-width: 1280px;
    padding: 0px;
}
.location-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 48px;
}

.text-box {
  flex: 1;
  min-width: 300px;
}

.address-box {
    padding: 20px;
    border-radius: 8px;
    margin-top: 28px;
    border: 1px solid #55585e17;
}
.address-box h4 {
    font-family: Inter;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0;
    margin: 0px 0px 25px 0px;
}

.address-box p {
    font-family: Voltaire;
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0;
    color: #9CA3AF;
}

.location-line {
  font-family: Official Book;
  font-weight: 400;
  font-size: 20px;
  line-height: 16px;
  letter-spacing: 0;
  margin: 40px 0px 0px 0px;
  color: #fff !important;
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
    object-fit: cover;
    height: 400px;
    border-radius: 8px;
}
.experiencia_sect img {
    margin: -16px 6px 0px;
}
.location-section h2 {
    font-family: Voltaire;
    font-weight: 400;
    font-size: 50px;
    line-height: 100%;
    letter-spacing: 0;
    text-transform: uppercase;
}
.location-section_map {
    background-color: #1c2023;
    color: #fff;
    padding: 50px 0px;
}
.location-line img {
    width: 16px;
    height: 20px;
}
@media(max-width:767px) {
  .map-box, .text-box {
    flex: 1;
    min-width: 100%;
}
/* .location-content {
    gap: 20px;
    flex-direction: column-reverse;
} */
.location-section {
    width: 100%;
    padding: 16px;
}
.grid {
    grid-template-columns: repeat(1, 1fr);
    max-width: 100%;
    padding: 16px;
}
.section-title {
    line-height: 64px;
    margin: 0px 0px 64px 0px;
}
.map-box img {
    border-radius: 0px;
}
}
</style>
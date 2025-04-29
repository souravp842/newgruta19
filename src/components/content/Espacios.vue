<script setup>
defineProps({
  name: "NuestrosEspacios",
  image :{
    type: "string",
    required: true,
  },
  
});
const image = new URL(`@/assets/images/baja.png`, import.meta.url).href
</script>

<template>
    <section class="text-white py-20 text-center" style="background-color: #1d1f20">
      <h2 class="text-4xl md:text-5xl font-bold tracking-wide uppercase mb-6 flex justify-center items-center gap-2">
        <span>NUESTR</span>
        <span class="inline">
            <!-- <img class="an-top-event-image" :src="image"/> -->
        </span>
        <span>S ESPACIOS<span class="text-orange-500">.</span></span>
      </h2>
  
     <center> <p class="max-w-2xl mx-auto text-sm md:text-base mb-10 leading-relaxed">
        Eleva tu productividad en un entorno moderno, cómodo y completamente equipado.<br>
        Nuestras membresías te brindan acceso a un workspace funcional con internet de alta<br>
        velocidad, recepción, estación de café y más beneficios que impulsan tu día a día.<br>
        Conéctate, crea y trabaja sin límites en un espacio diseñado para el éxito.<br>
      </p></center>
  
      <button
        class="bg-yellow-400 text-black font-semibold px-6 py-3 rounded shadow hover:bg-yellow-300 transition"
      >
        Ver Tour Virtual 360°
      </button>
    </section>
    <!-- start section 1 -->
 
    <div class="an-event-section">
    <h3 class="an-event-head"></h3>
    <div class="an-event-container">

        <div class="row">
    <div class="an-event-left col-sm-1">
      <img class="an-top-event-image" :src="image"/>
    </div>
    <div class="an-event-right col-sm-10 bg-secondary text-white">
        <spn class="an-event-title">Planta baja | EI punto de encuentro</spn><br>
        <span class="an-event-title">Donda la Creatividad y la coloboracion toman forma</span><br>
        <p  class="an-event-subtitle">Descubre un espacio exclusivo diseñado para quienes buscan lo mejor.
            Nuestro salón, con capacidad para 80 personas, combina elegancia y comodidad en un ambiente sofisticado.
            Un lugar donde cada detalle ha sido pensado para ofrecer una experiencia inigualable, ideal para reuniones sociales de alto nivel.
        </p>

  <div class="an-event-inner-row">
    <div class=" an-event-list-wraper">
    <div class="col-sm an-event-list">
        <span> Recaption can atencion professional</span><br>
        <span>Recaption can atencion professional</span><br>
        <span> Recaption can atencion professional</span>
    </div>
    <div class="col-sm an-event-list">
        <span>Espacios colobarativas y grados</span><br>
        <span>Espacios colobarativas y grados</span><br>
        <span> Espacios colobarativas y grados</span>
    </div>
  </div>
    <div class="col-sm an-button-wraper">
      <button class="btn btn-outline-orange w-100">Ver todos los servicios </button>
      <button class="btn btn-orange w-100">Reservar Ahora</button>
    </div>
  </div>     
    </div>   
  </div>
</div>
</div>
<!-- end section 1 -->

<!-- start section 2 -->
<div class="an-event-section">
    <h3 class="an-event-head"></h3>
    <div class="an-event-container">

        <div class="row">
    <div class="an-event-left col-sm-1">
      <img class="an-top-event-image" :src="image"/>
    </div>
    <div class="an-event-right col-sm-10 bg-secondary text-white">
        <spn class="an-event-title">Planta baja | EI punto de encuentro</spn><br>
        <span class="an-event-title">Donda la Creatividad y la coloboracion toman forma</span><br>
        <p  class="an-event-subtitle">Descubre un espacio exclusivo diseñado para quienes buscan lo mejor.
            Nuestro salón, con capacidad para 80 personas, combina elegancia y comodidad en un ambiente sofisticado.
            Un lugar donde cada detalle ha sido pensado para ofrecer una experiencia inigualable, ideal para reuniones sociales de alto nivel.
        </p>

  <div class="an-event-inner-row">
    <div class=" an-event-list-wraper">
    <div class="col-sm an-event-list">
        <span> Recaption can atencion professional</span><br>
        <span>Recaption can atencion professional</span><br>
        <span> Recaption can atencion professional</span>
    </div>
    <div class="col-sm an-event-list">
        <span>Espacios colobarativas y grados</span><br>
        <span>Espacios colobarativas y grados</span><br>
        <span> Espacios colobarativas y grados</span>
    </div>
  </div>
    <div class="col-sm an-button-wraper">
      <button class="btn btn-outline-orange w-100">Ver todos los servicios </button>
      <button class="btn btn-orange w-100">Reservar Ahora</button>
    </div>
  </div>     
    </div>   
  </div>
</div>
</div>
 <!-- end section 2 -->

 <!-- start section 3 -->
 <div class="an-event-section">
    <h3 class="an-event-head"></h3>
    <div class="an-event-container">

        <div class="row">
    <div class="an-event-left col-sm-1">
      <img class="an-top-event-image" :src="image"/>
    </div>
    <div class="an-event-right col-sm-10 bg-secondary text-white">
        <spn class="an-event-title">Planta baja | EI punto de encuentro</spn><br>
        <span class="an-event-title">Donda la Creatividad y la coloboracion toman forma</span><br>
        <p  class="an-event-subtitle">Descubre un espacio exclusivo diseñado para quienes buscan lo mejor.
            Nuestro salón, con capacidad para 80 personas, combina elegancia y comodidad en un ambiente sofisticado.
            Un lugar donde cada detalle ha sido pensado para ofrecer una experiencia inigualable, ideal para reuniones sociales de alto nivel.
        </p>

  <div class="an-event-inner-row">
    <div class=" an-event-list-wraper">
    <div class="col-sm an-event-list">
        <span> Recaption can atencion professional</span><br>
        <span>Recaption can atencion professional</span><br>
        <span> Recaption can atencion professional</span>
    </div>
    <div class="col-sm an-event-list">
        <span>Espacios colobarativas y grados</span><br>
        <span>Espacios colobarativas y grados</span><br>
        <span> Espacios colobarativas y grados</span>
    </div>
  </div>
    <div class="col-sm an-button-wraper">
      <button class="btn btn-outline-orange w-100">Ver todos los servicios </button>
      <button class="btn btn-orange w-100">Reservar Ahora</button>
    </div>
  </div>     
    </div>   
  </div>
</div>
</div>
 <!-- end section 3 -->

 <!-- start section 4 -->
 <div class="an-event-section">
    <h3 class="an-event-head"></h3>
    <div class="an-event-container">

        <div class="row">
    <div class="an-event-left col-sm-1">
      <img class="an-top-event-image" :src="image"/>
    </div>
    <div class="an-event-right col-sm-10 bg-secondary text-white">
        <spn class="an-event-title">Planta baja | EI punto de encuentro</spn><br>
        <span class="an-event-title">Donda la Creatividad y la coloboracion toman forma</span><br>
        <p  class="an-event-subtitle">Descubre un espacio exclusivo diseñado para quienes buscan lo mejor.
            Nuestro salón, con capacidad para 80 personas, combina elegancia y comodidad en un ambiente sofisticado.
            Un lugar donde cada detalle ha sido pensado para ofrecer una experiencia inigualable, ideal para reuniones sociales de alto nivel.
        </p>

  <div class="an-event-inner-row">
    <div class=" an-event-list-wraper">
    <div class="col-sm an-event-list">
        <span> Recaption can atencion professional</span><br>
        <span>Recaption can atencion professional</span><br>
        <span> Recaption can atencion professional</span>
    </div>
    <div class="col-sm an-event-list">
        <span>Espacios colobarativas y grados</span><br>
        <span>Espacios colobarativas y grados</span><br>
        <span> Espacios colobarativas y grados</span>
    </div>
  </div>
    <div class="col-sm an-button-wraper">
      <button class="btn btn-outline-orange w-100">Ver todos los servicios </button>
      <button class="btn btn-orange w-100">Reservar Ahora</button>
    </div>
  </div>     
    </div>   
  </div>
</div>
</div>
 <!-- end section 4 -->

 <section class="bg-black text-white text-center py-20">
  <h2 class="text-3xl md:text-4xl font-bold uppercase mb-4 tracking-wide">
    Listo para elevar tu espacio de trabajo
  </h2>
  <p class="text-base md:text-lg mb-8">
    Agenda una visita y conoce personalmente nuestras instalaciones
  </p>
  <button
    class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition duration-300"
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
    margin: 50px auto 0 auto;
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
    width: 100% !important;
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
.an-event-container  .an-event-right {
    padding: 32px 15px;
}
}

</style>
  

<script setup>
defineProps({ 
    message:{
        type: String,
        required: true
    },
    image: {
    type: String,
    required: true
  }
});
</script>


<template>
<section>
    <!-- start section 1 -->
 
    <div class="an-event-section">
    <h3 class="an-event-head"></h3>
    <div class="an-event-container">

        <div class="row">
            <div class="an-event-left col-sm-1">
    <!-- Bind the image prop to the src of the img element -->
    <img class="an-top-event-image" :src="image" alt="Event Image" />
  </div>
    <div class="an-event-right col-sm-10 bg-secondary text-white">
        <spn class="an-event-title">Planta baja | EI punto de encuentro</spn><br>
        <span class="an-event-title">{{ message }}</span>

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
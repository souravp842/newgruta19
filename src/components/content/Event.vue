<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
  title:{
        type:String,
        required:false
  },
  list1:{
        type:String,
        required:false
  },
  list2:{
        type:String,
        required:false
  },
  list3:{
        type:String,
        required:false
  },
  list4:{
        type:String,
        required:false
  },
  list5:{
        type:String,
        required:false
  },
  list6:{
        type:String,
        required:false
  },
  image: {
        type: String,
        required: false,
    }
})
const image = new URL(`@/assets/images/baja.png`, import.meta.url).href
</script>

<template>
  <div class="an-event-section">
    <h3 class="an-event-head">{{ msg }}</h3>
    <div class="an-event-container">
  <div class="row">
    <div class="an-event-left col-sm-1">
      <img class="an-top-event-image" :src="image"/>
    </div>
    <div class="an-event-right col-sm-10 bg-secondary text-white">
        <h3 class="an-event-title">{{ title }}</h3>
        <p  class="an-event-subtitle">Descubre un espacio exclusivo diseñado para quienes buscan lo mejor.
            Nuestro salón, con capacidad para 80 personas, combina elegancia y comodidad en un ambiente sofisticado.
            Un lugar donde cada detalle ha sido pensado para ofrecer una experiencia inigualable, ideal para reuniones sociales de alto nivel.
        </p>

        		
  <div class="an-event-inner-row">
    <div class=" an-event-list-wraper">
    <div class="col-sm an-event-list">
        <span> {{ list1 }}</span><br>
        <span>{{ list2 }}</span><br>
        <span> {{ list3 }}</span>
    </div>
    <div class="col-sm an-event-list">
        <span>{{ list4 }}</span><br>
        <span>{{ list5 }}</span><br>
        <span> {{ list6 }}</span>
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
</template>
<style scoped>
@import '@/assets/main.css';
.an-event-section {
    background: #1C2023;
    padding: 72px 0;
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
    margin: 72px auto 0 auto;
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
    line-height: 25px;
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
    color: #ffffff;
    letter-spacing: 0;
    font-family: 'Voltaire',sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 16px;
    letter-spacing: 0%;
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
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    gap: 24px;
    margin-top: 55px;
}
.an-button-wraper .btn {
    border-radius: 0 !important;
    width: max-content !important;
    padding: 10px 30px;
    min-height: 43px;
    font-family: Official Book;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
}
.btn-outline-orange {
    border: 2px solid #f57c00;
    color: #f57c00;
    background: transparent;
    font-family: Official Book;
    font-weight: 400;
    text-align: center;
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
    flex-direction: column-reverse;
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
.an-event-section h3.an-event-head{ 
    line-height: 64px;
}
}

</style>
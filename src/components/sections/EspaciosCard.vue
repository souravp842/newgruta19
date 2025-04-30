
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
 
    <div class="an-event-sections">
    <h3 class="an-event-head"></h3>
    <div class="an-event-container">

        <div class="row">
            <div class="an-event-left col-sm-1">
    <!-- Bind the image prop to the src of the img element -->
    <img class="an-top-event-image" :src="image" alt="Event Image" />
  </div>
<<<<<<< HEAD
    <div class="an-event-right col-sm-10 bg-secondary text-white">
        <spn class="an-event-title">Planta baja | EI punto de encuentro</spn><br>
        <span class="an-event-title">{{ message }}</span>
=======
    <div class="an-event-right col-sm-10 bg-secondary text-white exclusivo_personas">
        <spn class="an-event-title planta_baja_ei">Planta baja | EI punto de encuentro</spn><br>
        <span class="an-event-title exclusivo_diseñado">{{ message }}</span><br>
>>>>>>> 11d98d5a3ae9886b12f419bbad013884da8a3e71

  <div class="an-event-inner-row ">
    <div class="an-event-list-wraper an_eventlist_pro">
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
    <div class="col-sm an-button-wraper ver_tour_btn">
      <button class="btn btn-orange w-100"><svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.7031 0.37085H2.70312C1.6 0.37085 0.703125 1.26772 0.703125 2.37085V10.3708C0.703125 11.474 1.6 12.3708 2.70312 12.3708H6.46562C7.22187 12.3708 7.91563 11.9427 8.25313 11.2646L9.25313 9.2646C9.52812 8.71772 10.0875 8.37085 10.7 8.37085C11.3125 8.37085 11.8719 8.71772 12.1469 9.2646L13.1469 11.2646C13.4844 11.9427 14.1781 12.3708 14.9344 12.3708H18.7031C19.8062 12.3708 20.7031 11.474 20.7031 10.3708V2.37085C20.7031 1.26772 19.8062 0.37085 18.7031 0.37085ZM3.70312 5.87085C3.70312 5.34042 3.91384 4.83171 4.28891 4.45664C4.66398 4.08156 5.17269 3.87085 5.70312 3.87085C6.23356 3.87085 6.74227 4.08156 7.11734 4.45664C7.49241 4.83171 7.70312 5.34042 7.70312 5.87085C7.70312 6.40128 7.49241 6.90999 7.11734 7.28506C6.74227 7.66014 6.23356 7.87085 5.70312 7.87085C5.17269 7.87085 4.66398 7.66014 4.28891 7.28506C3.91384 6.90999 3.70312 6.40128 3.70312 5.87085ZM15.7031 3.87085C16.2336 3.87085 16.7423 4.08156 17.1173 4.45664C17.4924 4.83171 17.7031 5.34042 17.7031 5.87085C17.7031 6.40128 17.4924 6.90999 17.1173 7.28506C16.7423 7.66014 16.2336 7.87085 15.7031 7.87085C15.1727 7.87085 14.664 7.66014 14.2889 7.28506C13.9138 6.90999 13.7031 6.40128 13.7031 5.87085C13.7031 5.34042 13.9138 4.83171 14.2889 4.45664C14.664 4.08156 15.1727 3.87085 15.7031 3.87085Z" fill="white"/>
</svg>

 Ver tour 360°</button>
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
.an-event-container .an-event-left {
    width: 100%;
    max-width: 440px;
    margin: 0;
    padding: 0;
}
.an-event-container .an-event-right {
    width: 100%;
    flex-shrink: unset;
    padding: 32px;
    background: #0C0C0D !important;
    display: flex;
    flex-direction: column;
    border-radius: 0px 8px  8px 0px;
}
.an-event-container .an-event-left img.an-top-event-image {
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
.planta_baja_ei {
    font-family: Inter;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
}
.exclusivo_diseñado {
    font-family: Voltaire;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0;
    text-align: left;
    padding: 10px 0px 15px;
}
.an_eventlist_pro span {
    font-family: Official Book !important;
    font-weight: 400;
}
.ver_tour_btn button {
    background: #F97316;
    font-family: Official Book;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
    padding: 10px 25px !important;
}
.col-sm.an-event-list {
    text-align: left;
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
    /* width: 100% !important; */
    padding: 9px 15px;
}
.col-sm.an-button-wraper {
    margin-top: 50px;
}
.an-event-container {
    padding: 0 15px;
}
.an-event-container .an-event-left {
    max-width:100%;
}
.an-event-container .an-event-left img.an-top-event-image {
    max-height: 400px;
}
.an-event-container .an-event-right {
    padding: 32px;
}
}

</style>
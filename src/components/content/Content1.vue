<script setup>
defineProps({
  image: {
        type: String,
        required: false,
    }
})
const image = new URL(`@/assets/images/an-top-banner.png`, import.meta.url).href
const icon = new URL(`@/assets/images/icon.png`, import.meta.url).href
</script>

<template>
  <div class="an-top-banner">
    <img class="an-top-banner-image an-desktop" :src="image"/>
    <div class="an-top-banner-content-wraper">
    <div class="an-top-banner-content">
      <h4>EXECUTIVE<img :src="icon">FFICES.</h4>
    <p>GRUTA 19 CORP redefine la experiencia laboral con un entorno exclusivo,disenado para lideres y visionarios. </p>
   <div class="an-top-banner-buttons">
    <button class="one">Contratar</button>
    <button class="two">Agendar visita</button>
  </div>
    </div>
  </div>
  </div>
</template>
<style scoped>
.an-top-banner {
    background: #1C2023;
    position: relative;
}
img.an-top-banner-image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.an-top-banner-content-wraper {
    position: relative;
    display: grid;
    grid-template-columns: 1fr minmax(20%,1280px) 1fr;
}
.an-top-banner-content{
  grid-column: 2/4;
  padding: 13% 45px;
}
.an-top-banner-content h4 {
    color: #ffffff;
    font-size: 76px;
    line-height: 86px;
    letter-spacing: 0;
    font-family: "Voltaire", sans-serif;
    margin: 0 0 32px 0;
    max-width: 520px;
}
.an-top-banner-content p {
    color: #D9E2F0;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0;
    max-width: 520px;
    margin: 0 0 25px 0;
    font-family: "Voltaire", sans-serif;
}
.an-top-banner-buttons {
    max-width: 520px;
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: flex-start;
}
.an-top-banner-buttons button.one {
    border: 2px solid #F97316;
    outline: unset;
    background: #F97316;
    color: #ffffff;
    font-family: "Voltaire", sans-serif;
    padding: 14px 37px;
    font-size: 26px;
    line-height: 100%;
    letter-spacing: 0;
}
.an-top-banner-buttons button.two {
    border: 2px solid #F97316;
    outline: unset;
    background:transparent;
    color:#F97316;
    font-family: "Voltaire", sans-serif;
    padding: 14px 37px;
    font-size: 26px;
    line-height: 100%;
    letter-spacing: 0;
}

/* responsive */
@media(max-width:850px){
  .an-top-banner {
    display: flex;
    flex-direction: column-reverse;
    gap: 60px;
    padding: 60px 15px;
}
img.an-top-banner-image {
    position:relative;
    top:unset;
    left: unset;
    border-radius: 8px;
}
.an-top-banner-content-wraper {
    display:block;
}
.an-top-banner-content{
  grid-column:unset;
  padding:0;
}
.an-top-banner-content h4 {
    font-size:66px;
    margin: 0 0 16px 0;
}
.an-top-banner-buttons {
    max-width:100%;
    flex-direction: column;
}
.an-top-banner-buttons button {
    width:100%;
    padding: 10px 20px;
}
.an-top-banner-content p {
    line-height:26px;
}
}
</style>
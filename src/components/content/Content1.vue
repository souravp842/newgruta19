<script setup>
defineProps({
  image: {
        type: String,
        required: false,
    }
})
const image = new URL(`@/assets/images/Group 7.png`, import.meta.url).href
const icon = new URL(`@/assets/images/icon.png`, import.meta.url).href
</script>

<template>
  <div class="an-top-banner">
    <div class="an-top-banners">
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
  </div>
</template>
<style scoped>
.an-top-banner {
    background: #1C2023;
}
.an-top-banners {
    position: relative;
    padding-top: 40px;
}
img.an-top-banner-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.an-top-banner-content-wraper {
    display: grid;
    grid-template-columns: 1fr minmax(20%,1280px) 1fr;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    left: 0;
}
.an-top-banner-content {
    grid-column: 2/4;
    display: flex;
    align-items: baseline;
    flex-direction: column;
    justify-content: center;
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
    line-height: 25px;
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
    padding: 14px 37px;
    font-family: Official Book;
    font-weight: 400;
    font-size: 26px;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
}
.an-top-banner-buttons button.two {
    border: 2px solid #F97316;
    outline: unset;
    background: transparent;
    color: #F97316;
    padding: 14px 37px;
    font-family: Official Book;
    font-weight: 400;
    font-size: 26px;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
}
.an-top-banner-content h4 img {
    margin: -20px 0px 0px 10px;
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
    position: relative;
    top: unset;
    left: unset;
    border-radius: 8px;
    margin-top: 72px;
}
.an-top-banner-content-wraper {
    display: block;
    position: relative;
}
.an-top-banners {
    display: flex;
    flex-direction: column-reverse;
    padding: 0;
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
    max-width: 100%;
    flex-direction: column;
    width: 100%;
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
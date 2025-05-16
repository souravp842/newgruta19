<!-- src/views/Galery.vue -->
<script setup>
import GaleriaImageCard from '@/components/sections/GaleriaImageCard.vue'
import image from '@/assets/images/img.png';

</script>


<template>
<div class="main_hero_section">
  <div class="hero-section">
    <div class="overlay">
      <button class="virtual-tour-btn">Ver Tour Virtual 360°</button>
    </div>
  </div>
  </div>

    <div class="main_gallery_sect">
      <div class="main_gallery_crd">
          <GaleriaImageCard :image="image" message="Area the Recepcion "/>
          <GaleriaImageCard :image="image"  message="Executive Offices" />
          <GaleriaImageCard :image="image"  message="Sales de juntas"/>
          <GaleriaImageCard :image="image" message="Area Comun"/>
          <GaleriaImageCard :image="image"  message="Cafeterio" />
          <GaleriaImageCard :image="image"  message="Terraza"/>
    </div>
    </div>
  </template>

<style scoped>

.hero-section {
    position: relative;
    background-image: url('@/assets/images/banner.png');
        background-size: cover;
    background-position: center;
    height: 600px;
    width: 100%;
  }
  .overlay {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: end;
    padding-bottom:72px;
}
.virtual-tour-btn {
    border-radius: 0;
    background: #F97316;
    color: #ffffff;
    letter-spacing: 0;
    border: none;
    padding: 16px 30px;
    font-family: Official Book;
    font-weight: 400;
    font-size: 26px;
    line-height: 100%;
    text-align: center;
}
.main_gallery_crd {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap:32px;
    width: 1200px;
    margin: 0 auto;
    max-width: 1280px;
    padding: 0px;
}
.main_gallery_sect {
    padding-top: 102px;
    padding-right: 10px;
    padding-bottom: 102px;
    padding-left: 10px;
    background: #1C2023;
}
.main_gallery_sect {
    padding: 100px 10px;
    background: #1C2023;
}
@media(max-width:1024px) {
  .main_gallery_crd {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    max-width: 100%;
}
.virtual-tour-btn {
    width: 95%;
    position: absolute;
    bottom: -120px;
}
.hero-section {
    background-size: 100% 100%;
    height: 200px;
    width: 100%;
    background-repeat: no-repeat;
    background-position: top;
    border-radius:10px;
}
.main_gallery_sect {
    padding: 230px 10px 72px;
    background: #1C2023;
}
}
@media(max-width:767px){
.main_hero_section {
    padding-top: 70px;
    background: #1c2023;
}
.overlay {
    height: 204px;
    width: 100%;
    background: linear-gradient(99deg, rgb(28 32 35) 0%, rgb(28 32 35 / 99%) 28%, rgb(255 255 255 / 0%) 100%);
    top: -3px;
    position: absolute;
            z-index: 2;
}
}
</style>  

<!-- src/views/Galery.vue -->
<script setup>
import GaleriaImageCard from '@/components/sections/GaleriaImageCard.vue'
import image from '@/assets/images/img.png';

</script>


<template>

  <div class="hero-section">
    <div class="overlay">
      <button class="virtual-tour-btn">Ver Tour Virtual 360°</button>
    </div>
  </div>


    <div>
      <h2>Galery Page</h2>
      <GaleriaImageCard :image="image" message="Area the Recepcion "/>
      <GaleriaImageCard :image="image"  message="Executive Offices" />
      <GaleriaImageCard :image="image"  message="Sales de juntas"/>
      <GaleriaImageCard :image="image" message="Area Comun"/>
      <GaleriaImageCard :image="image"  message="Cafeterio" />
      <GaleriaImageCard :image="image"  message="Terraza"/>
    </div>
  </template>

<style scoped>
.hero-section {
    position: relative;
    background-image: url('@/assets/images/img.png'); /* Replace with your image */
    background-size: cover;
    background-position: center;
    height: 600px;
    width: 100%;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5); /* dark overlay */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .virtual-tour-btn {
    background-color: #f37021;
    color: white;
    font-size: 18px;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }
</style>  

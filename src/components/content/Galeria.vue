<!-- src/views/Galery.vue -->
<script setup>
import GaleriaImageCard from '@/components/sections/GaleriaImageCard.vue'
import image from '@/assets/images/img.png';

</script>


<template>
    <div>
      <h2>Galery Page</h2>
      <GaleriaImageCard :image="image"/>
      <GaleriaImageCard :image="image"/>
      <GaleriaImageCard :image="image"/>
    </div>
  </template>



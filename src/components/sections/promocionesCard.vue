<template>
    <div class="bg-black border border-orange-500 rounded-lg p-6 w-full max-w-md">
      <div class="text-sm text-white mb-2">
        <span class="bg-orange-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
          Válido hasta: {{ validUntil }}
        </span>
      </div>
      <h3 class="text-white text-lg font-bold mb-2">{{ title }}</h3>
      <p class="text-white text-sm mb-4">{{ description }}</p>
      <button class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded">
        Ver detalles
      </button>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    description: String,
    validUntil: String
  })
  </script>
  
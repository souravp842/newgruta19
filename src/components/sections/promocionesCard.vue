<template>
  <div class="promociones_cards bg-black border border-orange-500 rounded-lg p-6 w-full max-w-md">
    <div class="text-sm text-white mb-2">
      <span class="bg-orange-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
        Válido hasta: {{ validUntil }}
      </span>
    </div>
    <h3 class="text-white text-lg font-bold mb-2">{{ title }}</h3>
    <p class="text-white text-sm mb-4">{{ description }}</p>
    <div class="ver_btn">
    <button class="custom_btn">
      Ver detalles
    </button>
  </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  validUntil: String
})
</script>
<style>
button.custom_btn {
  border-radius: 0;
  background: #F97316;
  color: #ffffff;
  border: none;
  padding: 16px 30px;
  padding-top: 12.5px;
  padding-right: 24px;
  padding-bottom: 12.5px;
  padding-left: 24px;
  font-family: Official Book;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
}
.ver_btn {
  text-align: right;
}
</style>
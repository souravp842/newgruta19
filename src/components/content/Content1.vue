<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
    <h4>{{ msg }}</h4>
    <p>Dr Lora Saalman is an Associate Senior Fellow within SIPRI's Armament and Disarmament </p>
    <button>Contratar</button>
    <button>Agendar visita</button>
</template>
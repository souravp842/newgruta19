<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>



<template>
    <center><h3>Meeting : {{ msg }}</h3></center>
    <div class="text-white p-4 d-flex justify-content-center min-vh-100">
      <div class="card bg-black text-white p-4 rounded-4 shadow" style="width: 300px;">
        <h5 class="fw-bold">SALA VIP</h5>
        <h2 class="fw-bold text-white mt-2">
          $3,500 <span class="fs-6 text-light">MXN</span>
        </h2>
        <p class="text-white">Por hora</p>
        <ul class="list-unstyled mt-3 mb-4">
          <li class="mb-2 d-flex">
            <span class="text-warning me-2">✔</span> Incluye bar privado
          </li>
          <li class="mb-2 d-flex">
            <span class="text-warning me-2">✔</span> Sala de estar ejecutiva con TV
          </li>
          <li class="mb-2 d-flex">
            <span class="text-warning me-2">✔</span> Mesa de billar
          </li>
          <li class="mb-2 d-flex">
            <span class="text-warning me-2">✔</span> Oficina ejecutiva
          </li>
        </ul>
        <button class="btn btn-warning text-black fw-bold mb-2 w-100">
          Contratar Ahora
        </button>
        <button class="btn btn-outline-warning text-warning fw-semibold w-100">
          Ver todos los servicios
        </button>
      </div>
    </div>
  </template>
  


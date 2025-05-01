<script setup>
import promocionesCard from '@/components/sections/promocionesCard.vue'

</script>

<template>
        <div class="text-section">
      <h1 class="main-heading">
        PROMOCI<span class="orange-icon"><img src="@/assets/images/icon.png"></span>NES <br />
        ACTUALES<span class="orange-dot">.</span>
      </h1>
      <p class="subheading">
        Pregunta por nuestras  EXCUTIVE OFFICES! Desde 12,500 MXN + <br>iva al mes.
      </p>
    </div>
    <div class="flex flex-col md:flex-row gap-6 bg-[#1a1a1a] p-6 rounded-lg">
    <promocionesCard
      title="3 Meses Sin Costo"
      description="Contrata un año de oficina privada y obtén 3 meses adicionales sin costo."
      validUntil="31 Mar 2025"
    />
    <promocionesCard
      title="3 Meses Sin Costo"
      description="20% de descuento en membresías nuevas pagando por adelantado."
      validUntil="15 Feb 2025"
    />
  </div>
</template>


<style scoped>
.text-section {
  background-color: #1a1d1d;
  color: white;
  text-align: center;
  padding: 80px 20px;
  font-family: 'Helvetica Neue', sans-serif;
}

.main-heading {
  font-size: 42px;
  font-weight: bold;
  letter-spacing: 1.5px;
  line-height: 1.3;
  margin-bottom: 24px;
}

.orange-icon {
  color: #f37021;
  font-size: 38px;
  display: inline-block;
  vertical-align: middle;
  margin: 0 4px;
}

.orange-dot {
  color: #f37021;
  font-size: 36px;
}

.subheading {
  font-size: 14px;
  color: #ccc;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}
</style>
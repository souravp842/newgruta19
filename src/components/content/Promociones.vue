<script setup>
import promocionesCard from '@/components/sections/promocionesCard.vue'

</script>

<template>
        <div class="text-section">
      <h1 class="main-heading">
        PROMOCI<img src="@/assets/images/icon.png">NES <br />
        ACTUALES<span class="orange-dot">.</span>
      </h1>
      <p class="subheading">
        Pregunta por nuestras  EXCUTIVE OFFICES! Desde 12,500 MXN + iva al mes.
      </p>
    </div>
    <div class="promociones_card_sect flex flex-col md:flex-row gap-6 bg-[#1a1a1a] p-6 rounded-lg">
      <div class="promociones_card_sect_main">
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
  </div>
</template>


<style scoped>
.text-section {
    padding-top: 157px;
    padding-right: 10px;
    padding-bottom: 157px;
    padding-left: 10px;
    background-color: #1c2023;
    text-align: center;
    color: #fff;
}
.main-heading {
    color: #ffffff;
    font-size: 66px;
    line-height: 86px;
    letter-spacing: 0;
    font-family: "Voltaire", sans-serif;
    max-width: 520px;
    margin: 0 auto;
    text-transform: uppercase;
}
.main-heading img {
    margin: -16px 6px 0px;
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
    font-size: 75px;
}
.subheading {
    font-family: Voltaire;
    font-weight: 400;
    font-size: 22px;
    line-height: 25px;
    letter-spacing: 0;
    text-align: center;
    width: 490px;
    margin: 25px auto auto auto;
}
.promociones_card_sect {
    background-color: #1c2023;
    padding-top: 0px;
    padding-right: 10px;
    padding-bottom: 144px;
    padding-left: 10px;
}
.promociones_card_sect_main {
    width: 1200px;
    margin: 0 auto;
    max-width: 1280px;
    padding: 0px;
    display: flex;
    /* align-items: center; */
    gap: 40px;
}

.promociones_cards {
    width: 100%;
    border-radius: 16px;
    padding: 32px;
    border: 2px solid #F97316 !important;
}

.promociones_card_sect_main .text-sm.text-white.mb-2 span {
    border-radius: 32px;
    background: #F9731699;
    text-align: right;
}

.promociones_card_sect_main .text-sm.text-white.mb-2 {
    text-align: right;
}

.promociones_card_sect_main h3 {
    font-family: Inter;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0;
    color: #FFFFFF;
    padding-top: 16px;
}

.promociones_card_sect_main p {
    font-family: Voltaire;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0;
    color: #D9E2F0;
    padding-top: 16px;
}
.promociones_card_sect_main button {
    background: #F97316;
    color: #ffffff;
    font-family: "Voltaire", sans-serif;
    padding: 16px 30px;
    font-size: 26px;
    line-height: 100%;
    letter-spacing: 0;
    border: navajowhite;
    border-radius: 0px;
}
.promociones_card_sect_main span {
    font-family: Official Book;
    font-weight: 400;
    font-size: 20px;
    line-height: 16px;
    letter-spacing: 0;
    background: #F9731699;
    border-radius: 32px;
}
.promociones_card_sect_main .text-sm.text-white.mb-2 {
    text-align: right;
}
@media(max-width:1140px) {
  .promociones_card_sect_main {
    width: 100%;
    flex-wrap: wrap;
}
.text-section{
    padding-top: 64px;
    padding-bottom: 64px;
}
button.custom_btn {
    width: 100%;
    text-align: center;
}
.subheading {
    width: 100%;
}
}
</style>
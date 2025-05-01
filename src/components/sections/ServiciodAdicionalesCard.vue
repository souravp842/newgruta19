<template>
  <div class="servicios-wrapper">

    <div class="servicios-grid">
      <div class="card" v-for="(item, index) in servicios" :key="index">
        <div class="line"></div>
        <div class="content">
          <h3>{{ item.titulo }}</h3>
          <p>{{ item.descripcion }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiciosAdicionales',
  data() {
    return {
      servicios: [
        {
          titulo: 'COFFEE BREAK',
          descripcion: 'Servicio de catering para eventos y reuniones importantes.',
        },
        {
          titulo: 'VALET PARKING',
          descripcion: 'Servicio personalizado de estacionamiento para ti y tus visitantes.',
        },
        {
          titulo: 'LOCKERS PRIVADOS',
          descripcion: 'Espacio seguro para almacenar tus pertenencias personales.',
        },
        {
          titulo: 'LINEA TELEFONICA',
          descripcion: 'Servicio de catering para eventos y reuniones importantes.',
        },
        {
          titulo: 'VALET PARKING',
          descripcion: 'Servicio personalizado de estacionamiento para ti y tus visitantes.',
        },
        {
          titulo: 'LOCKERS PRIVADOS',
          descripcion: 'Espacio seguro para almacenar tus pertenencias personales.',
        },
       
      ],
    };
  },
};
</script>

<style scoped>
.servicios-wrapper {
    background-color: #1c2023;
    padding: 2rem 1rem;
    color: #fff;
    text-align: center;
}

.title {
  font-size: 2rem;
  margin-bottom: 2rem;
  font-family: 'Arial Narrow', sans-serif;
}

.servicios-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* exactly 3 columns */
  gap: 1.5rem;
  justify-content: center;
}

.serviciod_adicionales_card .card {
    background: #0C0C0D;
    color: #fff;
    text-align: left;
    padding-top: 16px;
    padding-right: 32px;
    padding-bottom: 16px;
    padding-left: 32px;
    border-radius: 8px;
    display: block;
}

.line {
  width: 2px;
  background-color: #ff6a00;
  margin-right: 10px;
}
.content h3 {
    font-family: Voltaire;
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0;
    text-transform: uppercase;
}
.content p {
    font-family: Voltaire;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0;
    margin: 16px 0px 0px 0px;
}
.serviciod_adicionales_card .content {
    border-left: 1px solid var(--Primary, #F97316);
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    border-left-width: 1px;
}
@media(max-width:767px) {
.servicios_sections_ct h2 {
    line-height: 62px;
}
.servicios-grid {
    grid-template-columns: repeat(1, 1fr);
}
.serviciod_adicionales_card .card {
    padding: 16px;
}
}
</style>

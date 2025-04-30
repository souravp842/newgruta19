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
  background-color: #1d1f21;
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

.card {
  background-color: #111;
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 6px;
  text-align: left;
  color: #e0e0e0;
}

.line {
  width: 2px;
  background-color: #ff6a00;
  margin-right: 10px;
}

.content h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
}

.content p {
  margin: 0;
  font-size: 0.9rem;
}
</style>

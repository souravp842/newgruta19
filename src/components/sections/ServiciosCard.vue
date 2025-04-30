<template>
  <div class="servicios-wrapper">
    <div class="servicios-grid">
      <div class="card" v-for="(item, index) in servicios" :key="index">
        <div class="card-content">
          <div class="icon">
            <img :src="item.icon" alt="icon" />
          </div>
          <div class="text">
            <h3>{{ item.title }}</h3>
            <p>{{ item.descripcion }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import icon from '@/assets/images/icon.png';
import icon1 from '@/assets/images/message.png';

export default {
  name: 'ServiciosAdicionales',
  data() {
    return {
      servicios: [
        {
          title: 'RECEPCION PROFESIONAL',
          descripcion: 'Personal capacitado para atender todas tus necesidades adminstratives',
          icon: icon
        },
        {
          title: 'MENSAJERÍA Y PAQUETERÍA',
          descripcion: 'Servicio de recepción y envío de correspondencia y paquetes a nivel nacional e internacional. (Para Executive offices, oficina virtual y privada)',
          icon: icon1
        },
        {
          title: 'SALA ONE TO ONE',
          descripcion: 'Ideal para entrevistas, consultas y reuniones privadas.',
          icon: icon
        },
        {
          title: 'ATENCIÓN EXCLUSIVA',
          descripcion: 'Servicio personalizado para atender todas tus necesidades empresariales.',
          icon: icon
        },
        {
          title: 'MOBILIARIO EJECUTIVO',
          descripcion: 'Muebles ergonómicos de alta calidad para tu máxima comodidad',
          icon: icon
        },
        {
          title: 'APP GRUTA19',
          descripcion: 'Gestiona reservas y servicios desde nuestra aplicación móvil exclusiva.',
          icon: icon
        },
        {
          title: 'ESTACIÓN DE CAFÉ',
          descripcion: 'Café premium y bebidas disponibles durante todo el día.',
          icon: icon
        },
        {
          title: 'CONTROL DE SEGURIDAD',
          descripcion: 'Sistema de vigilancia 24/7 y control de acceso para tu tranquilidad.',
          icon: icon
        },
        {
          title: 'ÁREA DE IMPRESIÓN',
          descripcion: 'Equipos multifuncionales de última generación para tus necesidades de impresión.',
          icon: icon
        },
        {
          title: 'SERVICIOS GENERALES',
          descripcion: 'Mantenimiento y limpieza profesional de todas las instalaciones.',
          icon: icon
        },
        {
          title: 'SALA DE JUNTAS',
          descripcion: 'Espacios equipados para reuniones profesionales y presentaciones.',
          icon: icon
        },
        {
          title: 'INTERNET DEDICADO',
          descripcion: 'Conexión de alta velocidad y estabilidad garantizada.',
          icon: icon
        },
        {
          title: 'OFFICE SERVICES',
          descripcion: 'Mesero con atención personalizada para tu oficina o eventos.',
          icon: icon
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
  grid-template-columns: repeat(2, 1fr); /* exactly 3 columns */
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
.card {
  background: #1a1a1a;
  color: white;
  padding: 16px;
  border-radius: 8px;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.icon img {
  width: 48px;
  height: 48px;
}

.text h3 {
  margin: 0;
  font-size: 18px;
}

.text p {
  margin: 4px 0 0;
  font-size: 14px;
  color: #ccc;
}

</style>

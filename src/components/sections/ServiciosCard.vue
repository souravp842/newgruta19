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
import icon from '@//assets/images/icon.png';
// import icon1 from '@//assets/images/message.png';
import receptionicon from '@//components/icons/receptionicon.svg';
import mail from '@//components/icons/mail.svg';
import sala from '@//components/icons/sala.svg';
import atencion from '@//components/icons/atencion.svg';
import mobiliario from '@//components/icons/mobiliario.svg';
import app from '@//components/icons/app.svg';
import atencionde from '@//components/icons/atencionde.svg';
import control from '@//components/icons/control.svg';
import area from '@//components/icons/area.svg';
import servicios from '@//components/icons/servicios.svg';
import sala2 from '@//components/icons/sala2.svg';
import internet from '@//components/icons/internet.svg';
import officeservicios from '@//components/icons/officeservicios.svg';

export default {
  name: 'ServiciosAdicionales',
  data() {
    return {
      servicios: [
        {
          title: 'RECEPCION PROFESIONAL',
          descripcion: 'Personal capacitado para atender todas tus necesidades adminstratives',
          icon: receptionicon
        },
        {
          title: 'MENSAJERÍA Y PAQUETERÍA',
          descripcion: 'Servicio de recepción y envío de correspondencia y paquetes a nivel nacional e internacional. (Para Executive offices, oficina virtual y privada)',
          icon: mail
        },
        {
          title: 'SALA ONE TO ONE',
          descripcion: 'Ideal para entrevistas, consultas y reuniones privadas.',
          icon: sala
        },
        {
          title: 'ATENCIÓN EXCLUSIVA',
          descripcion: 'Servicio personalizado para atender todas tus necesidades empresariales.',
          icon: atencion
        },
        {
          title: 'MOBILIARIO EJECUTIVO',
          descripcion: 'Muebles ergonómicos de alta calidad para tu máxima comodidad',
          icon: mobiliario
        },
        {
          title: 'APP GRUTA19',
          descripcion: 'Gestiona reservas y servicios desde nuestra aplicación móvil exclusiva.',
          icon: app
        },
        {
          title: 'ESTACIÓN DE CAFÉ',
          descripcion: 'Café premium y bebidas disponibles durante todo el día.',
          icon: atencionde
        },
        {
          title: 'CONTROL DE SEGURIDAD',
          descripcion: 'Sistema de vigilancia 24/7 y control de acceso para tu tranquilidad.',
          icon: control
        },
        {
          title: 'ÁREA DE IMPRESIÓN',
          descripcion: 'Equipos multifuncionales de última generación para tus necesidades de impresión.',
          icon: area
        },
        {
          title: 'SERVICIOS GENERALES',
          descripcion: 'Mantenimiento y limpieza profesional de todas las instalaciones.',
          icon: servicios
        },
        {
          title: 'SALA DE JUNTAS',
          descripcion: 'Espacios equipados para reuniones profesionales y presentaciones.',
          icon: sala2
        },
        {
          title: 'INTERNET DEDICADO',
          descripcion: 'Conexión de alta velocidad y estabilidad garantizada.',
          icon: internet
        },
        {
          title: 'OFFICE SERVICES',
          descripcion: 'Mesero con atención personalizada para tu oficina o eventos.',
          icon: officeservicios
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
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
}

.card {
    background-color: #111;
    display: flex;
    align-items: flex-start;
    padding: 1rem;
    text-align: left;
    color: #e0e0e0;
    justify-content: center;
    padding-top: 16px;
    padding-right: 40px;
    padding-bottom: 16px;
    padding-left: 40px;
    border-radius: 8px;
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
    font-family: Voltaire;
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0;
    text-transform: uppercase;
}
.text p {
    font-family: Voltaire;
    font-weight: 400;
    font-size: 24px;
    line-height: 30PX;
    letter-spacing: 0;
    margin: 16px 0px 0px 0px;
    width: 469.5px;
}
.servicios_sections_ct .text {
    border-left: 1px solid var(--Primary, #F97316);
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    border-left-width: 1px;
}
.card:nth-child(3) img {
    mix-blend-mode: lighten;
}
@media(max-width:767px) {
  .servicios-grid {
    grid-template-columns: repeat(1, 1fr);
}
.text p {
    width: auto;
}
.card {
    padding: 16px;
}

}

</style>

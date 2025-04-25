<!-- App.vue -->
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Header from './components/header/Header.vue'
import Content1 from './components/content/Content1.vue'
import Content2 from './components/content/Content2.vue'
import Contact from './components/content/Contact.vue'
import Footer from './components/footer/Footer.vue'
import Link2 from './components/content/Link2.vue'
import Link3 from './components/content/Link3.vue'
import Link4 from './components/content/Link4.vue'
import Content3 from './components/content/Content3.vue'
import Meeting from './components/content/Meeting.vue'
import Event from './components/content/Event.vue'
import Review from './components/content/Review.vue'

</script>


<!-- 
<template>
    <Header />
    <router-view />
    
    <center><Content1 msg="EXECUTIVE OFFICES."/></center>
    <Content2 msg="CONOCE GRUTA 19 CORP" price="$350" message1="Areas comunes" message2="Internet da alta velocidad"/>
    <Content2 price="$3,500" message1="I hara de sala de juntas 6 persons / mes" message2="Sala da juntas one to one"/>
    <Content2 price="$4,500"/>
    <Contact/>

    <Footer/> -->
    

    <template>
      <div>
        <Header />
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
    
        <template v-if="$route.path === '/'">
          <Content1 msg="EXECUTIVE OFFICES." />
          <Content2 msg="CONOCE GRUTA 19 CORP" price="$350" message1="Areas comunes" message2="Internet da alta velocidad" price1="$3,500" message3="Hora de sala de juntas 6 personas / mes" message4="Sala de juntas one to one" />
          <Content3 msg="CONOCE NUESTRA OFERTA DE OFICINAS" title="Executive Offices" price="$12,500" message1="Acceso a las instalaciones de Gruta 24 7, los 365 días del año." message2="Atención personalizada a visitas" message3="Horas de Salas de Juntas." title1="Virtual Offices" price1="$6,200" message4="Recepción de 8:00 am a 8:00 pm" message5="Toma de mensajes y envío por correo" message6="Atención personalizada a visitas" />
          <Meeting msg="MEETING ROOMS"/>
          <Event msg="AREA SOCIAL PARA EVENTOS"/>
          <Review msg="lo que dicen nuestros clientes"/>
        </template>
        <Footer />
      </div>
    
  <!-- <header>
  
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->

  <!-- <main>
    <TheWelcome />
  </main> -->
</template>


<!-- 
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->



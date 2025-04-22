<!-- App.vue -->
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Header from './components/header/Header.vue'
import Content1 from './components/content/Content1.vue'
import Content2 from './components/content/Content2.vue'
import Contact from './components/content/Contact.vue'
import Footer from './components/footer/Footer.vue'

</script>



<template>
    <Header />
    <!-- <router-view /> -->
    <center><Content1 msg="EXECUTIVE OFFICES."/></center>
    <Content2 msg="CONOCE GRUTA 19 CORP" price="$350" message1="Areas comunes" message2="Internet da alta velocidad"/>
    <Content2 price="$3,500" message1="I hara de sala de juntas 6 persons / mes" message2="Sala da juntas one to one"/>
    <Content2 price="$4,500"/>
    <Contact/>
    <Footer/>
    
    
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



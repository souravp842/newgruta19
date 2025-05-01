<!-- <template>
  <div class="amenities-section">
    <h2 class="section-title">AMENIDADES Y SERVICIOS COMPLEMENTARIOS</h2>
    <div class="grid">
      <div class="card" v-for="(item, index) in amenities" :key="index">
        <div class="icon">icon</div> 
        <img :src="item.icon" alt="icon" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import internet from '@/components/icons/internet.svg';
export default {
  data() {
    return {
      amenities: [
        { icon: "internet", title: "JAZZERCISE Pedregal", description: "Atención personalizada" },
        { icon: "🎾", title: "Padel ON", description: "Reservación previa" },
        { icon: "💆‍♀️", title: "Estética", description: "Servicio integral" },
        { icon: "🍽️", title: "HALOCLINA CATERING", description: "Atención personalizada" },
        { icon: "🧘", title: "INNATE", description: "Reservación previa" },
        { icon: "🥋", title: "The Jab", description: "Servicio integral" },
      ],
    };
  },
};
</script>

<style scoped>
.amenities-section {
  background-color: #1a1d1d;
  color: white;
  text-align: center;
  padding: 60px 20px;
  font-family: 'Helvetica Neue', sans-serif;
}

.section-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 40px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(260px, 1fr));
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto;
}

.card {
  background-color: #111314;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 20px;
  text-align: left;
}

.icon {
  font-size: 20px;
  color: #f37021;
  margin-bottom: 10px;
}

.card h3 {
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 5px;
}

.card p {
  font-size: 14px;
  color: #ccc;
}

</style> -->



<template>
  <div class="amenities-section">
    <h2 class="section-title">AMENIDADES Y SERVICIOS COMPLEMENTARIOS</h2>
    <div class="grid">
      <div class="card" v-for="(item, index) in amenities" :key="index">
        <div class="icon">
          <img v-if="iconMap[item.icon]" :src="iconMap[item.icon]" alt="icon" />
          <span v-else>{{ item.icon }}</span>
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import pedregal from '@/components/icons/pedregal.svg';
import padelon from '@/components/icons/padelon.svg';
import estéticaicon from '@/components/icons/estéticaicon.svg';
import halocli from '@/components/icons/halocli.svg';
import innate from '@/components/icons/innate.svg';
import TheJab from '@/components/icons/TheJab.svg';



export default {
  data() {
    return {
      iconMap: {
         pedregal: pedregal,
         padelon: padelon,
         estéticaicon: estéticaicon,
         halocli: halocli,
         innate: innate,
         TheJab: TheJab,
         
      },
      amenities: [
        { 
          icon: "pedregal", 
          title: "JAZZERCISE Pedregal", 
          description: "Atención personalizada" 
        },
        { 
          icon: "padelon", 
          title: "Padel ON", 
          description: "Reservación previa" 
        },
        { 
          icon: "estéticaicon", 
          title: "Estética", 
          description: "Servicio integral" 
        },
        { 
          icon: "halocli", 
          title: "HALOCLINA CATERING", 
          description: "Atención personalizada" 
        },
        { 
          icon: "innate", 
          title: "INNATE", 
          description: "Reservación previa" 
        },
        { 
          icon: "TheJab", 
          title: "The Jab", 
          description: "Servicio integral" 
        },
      ],
    };
  },
};
</script>

<style scoped>
.amenities-section {
    background-color: #1c2023;
    color: white;
    text-align: center;
    padding: 72px 0px;
}
.section-title {
    font-family: Voltaire;
    font-weight: 400;
    font-size: 50px;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
    text-transform: uppercase;
    margin: 0px 0px 64px 0px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(260px, 1fr));
  gap: 20px;
  max-width: 1280px;
  margin: 0 auto;
}

.card {
    background-color: transparent;
    border-radius: 8px;
    padding: 20px;
    text-align: left;
    border: 1px solid #FFFFFF66;
}
.icon {
    font-size: 32px;
    margin-bottom: 10px;
    text-align: left;
}

.icon img {
  width: 32px;
  height: 32px;
}
.amenities-section h3 {
    color: #fff;
    font-family: Inter;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 15px;
    letter-spacing: 0;
}
.card p {
    font-family: Voltaire;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0;
    color: #D9E2F0;
}
</style>

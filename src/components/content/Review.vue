<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
  review1: {
    type: String,
    required: true,
  },
   review2: {
    type: String,
    required: true,
  },
   review3: {
    type: String,
    required: true,
  },
  author1: {
    type: String,
    required: true,
  },
  author2: {
    type: String,
    required: true,
  },
  author3: {
    type: String,
    required: true,
  },
  company1: {
    type: String,
    required: true,
  },
  company2: {
    type: String,
    required: true,
  },
  company3: {
    type: String,
    required: true,
  },
  image: {
        type: String,
        required: false,
    }
})
const image = new URL(`@/assets/images/baja.png`, import.meta.url).href
</script>

<template>
  <div class="an-review-section">

    <div class="an-review-container">
      <h2 class="an-review-head">{{ msg }}</h2>
    <div class="an-review-card-wraper">

  
    <div class="an-review-card">
        <p>{{ review1 }}</p>
        <div class="an-review-card-bottom"> 
          <div class="an-review-card-bottom-left">  <img class="an-review-image" :src="image"/></div>
          <div class="an-review-card-bottom-right">
          <span>{{ author1 }} <br>{{ company1 }}</span>
        </div>
        </div>
       
    </div>
    <div class="an-review-card">
        <p>{{ review2 }}</p>
        <div class="an-review-card-bottom">
          <div class="an-review-card-bottom-left"><img class="an-review-image" :src="image"/></div>
          <div class="an-review-card-bottom-right">
          <span>{{ author2 }} <br>{{ company2 }}</span>
          </div>
        </div>
        
    </div>
    <div class="an-review-card">
        <p>{{ review3 }}</p>
        <div class="an-review-card-bottom">
          <div class="an-review-card-bottom-left"><img class="an-review-image" :src="image"/></div>
          <div class="an-review-card-bottom-right">
          <span>{{ author3 }} <br>{{ company3 }}</span>
        </div>
      </div>
    </div>
  
    </div>
</div>
</div>
</template>


<style scoped>
.an-review-section {
    background: #1C2023;
    padding: 50px 0;
}
.an-review-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 45px;
}
h2.an-review-head {
    color: #ffffff;
    text-align: center;
    font-size: 50px;
    line-height: 100%;
    letter-spacing: 0;
    font-family: "Voltaire", sans-serif;
    text-transform: uppercase;
}
.an-review-card-wraper {
    margin-top: 40px;
    display: flex;
    align-items: stretch;
    gap: 48px;
    justify-content: flex-start;
}
.an-review-card {
    background: #0C0C0D;
    padding: 33px;
    width: 100%;
}
.an-review-card  p {
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0;
    color: #D1D5DB;
    font-family: "Voltaire", sans-serif;
}
.an-review-card-bottom {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
}
.an-review-card-bottom-left img.an-review-image {
    height: 48px;
    width: 48px;
    border-radius: 50px;
    object-fit: cover;
}
.an-review-card-bottom-right span {
    color: #ffffff;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0;
    font-family: "Voltaire", sans-serif;
}

@media(max-width:1000px){
  .an-review-container {
    padding: 0 15px;
}
.an-review-card-wraper {
    gap: 10px;
    flex-direction: row;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
}
.an-review-card {
    flex-basis: 100%;
    flex-shrink: 0;
    scroll-snap-align: start;
    padding: 20px;
    
}

}


</style>
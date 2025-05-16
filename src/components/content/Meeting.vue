<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
  title1: {
    type: String,
    required: true,
  },
  title2: {
    type: String,
    required: true,
  },
  title3: {
    type: String,
    required: true,
  },
  title4: {
    type: String,
    required: true,
  },
  title5: {
    type: String,
    required: true,
  },
  price1: {
    type: [String, Number],
    required: false,
  },
  price2: {
    type: [String, Number],
    required: false,
  },
  price3: {
    type: [String, Number],
    required: false,
  },
  price4: {
    type: [String, Number],
    required: false,
  },
  price5: {
    type: [String, Number],
    required: false,
  },
   paxvalue1: {
    type: [String, Number],
    required: false,
  },
  paxvalue2: {
    type: [String, Number],
    required: false,
  },
  paxvalue3: {
    type: [String, Number],
    required: false,
  },
  paxvalue4: {
    type: [String, Number],
    required: false,
  },
  list1: {
    type: [String, Number],
    required: false,
  },
  list2: {
    type: [String, Number],
    required: false,
  },
  list3: {
    type: [String, Number],
    required: false,
  },
  list4: {
    type: [String, Number],
    required: false,
  },
  list5: {
    type: [String, Number],
    required: false,
  },
  list6: {
    type: [String, Number],
    required: false,
  },
  list7: {
    type: [String, Number],
    required: false,
  },
  list8: {
    type: [String, Number],
    required: false,
  },
  list9: {
    type: [String, Number],
    required: false,
  },
  list10: {
    type: [String, Number],
    required: false,
  },
  list11: {
    type: [String, Number],
    required: false,
  },
  list12: {
    type: [String, Number],
    required: false,
  },
  list13: {
    type: [String, Number],
    required: false,
  },
  list14: {
    type: [String, Number],
    required: false,
  },
  list15: {
    type: [String, Number],
    required: false,
  }
})
</script>



<template>
  <div class="an-meeting-section">
    <div class="an-meeting-wraper">
    <h5> {{ msg }}</h5>
    <div class="an-meeting-card-wraper">
      <!-- first card start -->
      <div class="card card-container  text-white shadow" >
        <h4 class="fw-bold">{{ title1 }}</h4>
        <h2 class="fw-bold text-white mt-2">
         <span class="price"> {{ price1 }}</span> <span class="fs-6 text-light">MXN</span>
        </h2>
        <p class="Por-hora">Por hora</p>
        <ul class="list-unstyled mt-3 mb-4">
          <li class="mb-2 d-flex">
            {{ list1 }}
          </li>
          <li class="mb-2 d-flex">
            {{ list2 }}
          </li>
          <li class="mb-2 d-flex">
            {{ list3 }}
          </li>
          <li class="mb-2 d-flex">
            {{ list4 }}
          </li>
        </ul>
        <button class="btn btn-orange w-100 mb-3">
          Contratar Ahora
        </button>
        <button class="btn btn-outline-orange w-100">
          Ver todos los servicios
        </button>
      </div>
         <!-- first card end -->
            <!-- socond card start -->
      <div class="card card-container  text-white shadow" >
        <h4 class="fw-bold">{{ title2 }}</h4>
        <h2 class="fw-bold text-white mt-2">
         <span class="price"> {{ price2 }}</span> <span class="fs-6 text-light">MXN</span>
        </h2>
        <p class="Por-hora">Capacidad <span>{{ paxvalue1 }}</span> - por hora</p>
        <ul class="list-unstyled mt-3 mb-4">
          <li class="mb-2 d-flex">
            {{ list5 }}
          </li>
          <li class="mb-2 d-flex">
            {{ list6 }}
          </li>
          <li class="mb-2 d-flex">
            {{ list7 }}
          </li>
          </ul>
        <button class="btn btn-orange w-100 ">
          Contratar Ahora
        </button>
        </div>
         <!-- second card end -->
          <!-- third card start -->
          <div class="card card-container  text-white shadow" >
        <h4 class="fw-bold">{{ title3 }}</h4>
        <h2 class="fw-bold text-white mt-2">
         <span class="price"> {{ price3 }}</span> <span class="fs-6 text-light">MXN</span>
        </h2>
        <p class="Por-hora">Capacidad <span>{{ paxvalue2 }}</span> - por hora</p>
        <ul class="list-unstyled mt-3 mb-4">
          <li class="mb-2 d-flex">
            {{ list8 }}
          </li>
          <li class="mb-2 d-flex">
            {{ list9 }}
          </li>
          <li class="mb-2 d-flex">
            {{ list10 }}
          </li>
          </ul>
        <button class="btn btn-orange w-100 ">
          Contratar Ahora
        </button>
        </div>
            <!-- third card end -->
               <!-- fourth card start -->
               <div class="card card-container  text-white shadow" >
        <h4 class="fw-bold">{{ title4 }}</h4>
        <h2 class="fw-bold text-white mt-2">
         <span class="price"> {{ price4 }}</span> <span class="fs-6 text-light">MXN</span>
        </h2>
        <p class="Por-hora">Capacidad <span>{{ paxvalue3 }}</span> - por hora</p>
        <ul class="list-unstyled mt-3 mb-4">
          <li class="mb-2 d-flex">
            {{ list11 }}
          </li>
          <li class="mb-2 d-flex">
            {{ list12 }}
          </li>
          <li class="mb-2 d-flex">
            {{ list13 }}
          </li>
          </ul>
        <button class="btn btn-orange w-100 ">
          Contratar Ahora
        </button>
        </div>
           <!-- fourth card end -->
          <!-- fifth card start -->
            <div class="card card-container  text-white shadow" >
        <h4 class="fw-bold">{{ title5 }}</h4>
        <h2 class="fw-bold text-white mt-2">
         <span class="price"> {{ price5 }}</span> <span class="fs-6 text-light">MXN</span>
        </h2>
        <p class="Por-hora">Capacidad <span>{{ paxvalue4 }}</span> - por hora</p>
        <ul class="list-unstyled mt-3 mb-4">
          <li class="mb-2 d-flex">
            {{ list14 }}
          </li>
          <li class="mb-2 d-flex">
            {{ list15 }}
          </li>
          </ul>
        <button class="btn btn-orange w-100 ">
          Contratar Ahora
        </button>
        </div>
           <!-- fifth card end -->
    </div>
  </div>
</div>
  </template>
  

  <style scoped>
@import '@/assets/main.css';


.an-meeting-section {
    background: #1C2023;
    padding: 30px 0 80px;
}
  .an-meeting-wraper {
      max-width:1600px;
      margin: 0 auto;
      padding: 0 45px;
  }
  .an-meeting-wraper h5 {
      color: #ffffff;
      text-align: center;
      font-size: 50px;
      line-height: 100%;
      letter-spacing: 0;
      font-family: "Voltaire", sans-serif;
  }
  .an-meeting-card-wraper {
    margin-top: 72px;
    display: flex;
    gap: 24px;
    align-items: stretch;
    justify-content: flex-start;
}
  .an-meeting-card-wraper .card-container {
    width: 50%;
    background: #0C0C0D;
    border-radius: 8px;
    padding: 30px;
    height: fit-content;
}
  .an-meeting-card-wraper .card-container p.Por-hora {
    font-size: 20px;
    line-height: 20px;
    color: #ffffff;
    letter-spacing: 0;
    font-family: "Voltaire", sans-serif;
    margin-top:10px;
}
.an-meeting-card-wraper .card-container p.Por-hora span {
    color: #f57c00;
}
  .an-meeting-card-wraper .card-container h4 {
      color: #FFFFFF;
      font-size: 24px;
      line-height: 24px;
      letter-spacing: 0;
      font-family: "Voltaire", sans-serif;
      font-weight: 400 !important;
  }
  .an-meeting-card-wraper .card-container span.price {
      font-family: "Voltaire", sans-serif;
      color: #ffffff;
      font-size: 48px;
      font-weight: 400 !important;
      line-height: normal;
      letter-spacing: 0;
  }
  .an-meeting-card-wraper .card-container span.currency {
      color: #FFFFFFCC;
      font-size:14px;
      line-height:14px;
      letter-spacing: 0;
      font-family: "Voltaire", sans-serif;
      margin-left: 0 !important;
  }
  .an-meeting-card-wraper .card-container p.por-dia {
      color: #FFFFFFCC;
      font-size: 20px;
      line-height: 20px;
      letter-spacing: 0;
      font-family: "Voltaire", sans-serif;
  }
  .an-meeting-card-wraper .card-container ul {
      margin: 30px 0 !important;
      display: flex;
      flex-direction: column;
      gap:0px;
  }
  .an-meeting-card-wraper .card-container ul li {
      position: relative;
      padding-left:25px;
      font-family: "Voltaire", sans-serif;
      color: #D9E2F0;
      font-size: 20px;
      line-height: 20px;
      letter-spacing: 0;
  }
  .an-meeting-card-wraper .card-container ul li:before {
      content: "";
      width: 14px;
      height: 8px;
      border: 2px solid #F97316;
      display: inline-block;
      position: absolute;
      left: 1px;
      top: 0px;
      border-top: unset;
      border-right: unset;
      transform: rotate(-45deg);
  }
  .an-meeting-card-wraper .card-container .btn {
      border-radius: 0;
      font-size: 18px;
      line-height: 18px;
      padding: 15px;
  }
  span.fs-6.text-light {
    font-family: Voltaire;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0;
    vertical-align: middle;
}
  /* responsive */
  @media(max-width:850px){
    .an-meeting-section {
      padding: 30px 0;
  }
    .an-meeting-card-wraper {
      flex-direction: column;
      gap: 32px;
  }
  .an-meeting-wraper {
      padding: 0 15px;
  }
  .an-meeting-card-wraper .card-container {
      width: 100%;
      padding: 34px 16px;
  }
  }
  </style>
<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
    <center><h2>Review : {{ msg }}</h2></center>
    <div class="container">
  <div class="row">
    <div class="col-sm-1">
    </div>
    <div class="col-sm-10 bg-secondary text-white">

  <div class="row">
    <div class="col-sm bg-info">
        <h4>Card1</h4>
        <p>El mejor espacio de trabajo frabajo que he enconttade. Profesional y productivo."</p>
        <span>Maria Gonzales <br>CEO, TechStart</span>
    </div>
    <div class="col-sm bg-info">
        <h4>Card2</h4>
        <p>El mejor espacio de trabajo frabajo que he enconttade. Profesional y productivo."</p>
        <span>Maria Gonzales CEO,<br> TechStart</span>
    </div>
    <div class="col-sm bg-info">
        <h4>Card3</h4>
        <p>El mejor espacio de trabajo frabajo que he enconttade. Profesional y productivo."</p>
        <span>Maria Gonzales CEO,<br>TechStart</span>
    </div>
  </div> 
    </div>
    <div class="col-sm-1">
    </div>
  </div>
</div>
</template>
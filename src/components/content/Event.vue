<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
    <center><h3>Events : {{ msg }}</h3></center>
    <div class="container">
  <div class="row">
    <div class="col-sm-1">
    </div>
    <div class="col-sm-10 bg-secondary text-white">
        <p>Salon de eventos</p>
        <h6>Descubre un espacio exclusivo diseñado para quienes buscan lo mejor.
            Nuestro salón, con capacidad para 80 personas, combina elegancia y comodidad en un ambiente sofisticado.
            Un lugar donde cada detalle ha sido pensado para ofrecer una experiencia inigualable, ideal para reuniones sociales de alto nivel.
        </h6>

        		
  <div class="row">
    <div class="col-sm">
        <span>✔ Recepción con atención profesional</span><br>
        <span>✔ Cafetería Premium gourmet</span><br>
        <span>✔ 37 estaciones de coworking</span>
    </div>
    <div class="col-sm">
        <span>✔ Recepción con atención profesional</span><br>
        <span>✔ Cafetería Premium gourmet</span><br>
        <span>✔ 37 estaciones de coworking</span>
    </div>
    <div class="col-sm">
      One of three columns
      <button>Ver todos los servicios </button>
      <button>Reservar Ahora</button>
    </div>
  </div>
        
    </div>
    <div class="col-sm-1">
    </div>
  </div>
</div>
</template>
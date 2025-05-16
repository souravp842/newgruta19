<template>
    <footer class="footer">
      <div class="footer-content">
        <!-- Left section -->
        <div class="footer-section">
          <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
          <p>Espacios de trabajo exclusivos para profesionales y empresas, diseñados para potenciar tu productividad y bienestar.</p>
          <p> <a href="https://www.google.com/maps?q=Cerrada+de+Gruta+19,+Jardines+del+Pedregal,+Álvaro+Obregón+01900" style="color:#D9E2F0">
      Cerrada de Gruta 19, Jardines del Pedregal Álvaro Obregón 01900
    </a><br>
         <a href="tel:+525532243451"style="color:#D9E2F0" >+52 55 3224 3451</a><br>
          <a href="https://mail.google.com/mail/?view=cm&to=contacto@gruta19corp.com" target="_blank" style="color:#D9E2F0">
  contacto@gruta19corp.com
</a>
</p>
        
        </div>
  
        <!-- Middle section -->
        <div class="footer-section">
          <h4>Enlaces Legales</h4>
          <ul>
            <li><a href="#">Términos y Condiciones</a></li>
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Código de Conducta</a></li>
          </ul>
        </div>
  
        <!-- Right section -->
        <div class="footer-section menu_last">
          <h4>Horarios</h4>
          <p>Acceso y Recepción:<br />
          Lunes a Viernes<br />
          8:00 AM - 8:00 PM</p>
        </div>
      </div>
  
      <div class="footer-bottom">
        © 2025 Gruta19 Corp. Todos los derechos reservados.
      </div>
    </footer>
  </template>
  
  <script setup>
  // No need for script logic for now
  </script>
  
  <style scoped>
  .footer {
    background-color:#1C2023;
    color: white;
    padding: 2rem 1rem;
    font-family: "Voltaire", sans-serif;
  }
  
  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 45px;
  }
  .footer-content .footer-section h4 {
    color: #ffffff;
    font-weight: 400 !important;
    font-family: Official Book;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0;
    margin-bottom: 20px;
}
.menu_last p {
    font-size: 20px;
    font-family: Official Book;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0;
}
  .footer-section {
    min-width: 200px;
  }
  .footer-content .footer-section:nth-child(1) {
    max-width: 390px;
}
  .footer-section h4 {
    margin-bottom: 0.5rem;
    /* font-weight: bold; */
  }
  
  .footer-section ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin: 0.5rem 0;
  }
  
 
  
  .footer-section ul li a:hover {
    text-decoration: underline;
  }
  
  .footer-bottom {
    margin-top: 2rem;
    border-top: 1px solid #444;
    padding-top: 2rem;
    color: #D9E2F0;
    font-family: Official Book;
    font-weight: 400;
    font-size: 20px;
    line-height: 16px;
    text-align: center;
}
  .footer-content .footer-section a {
    font-size: 20px;
    letter-spacing: 0;
    font-family: "Voltaire", sans-serif;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0;
}
.footer-section p {
    font-size: 20px;
    font-family: 'Voltaire';
    color: #D9E2F0;
    line-height:1.5;
}
  .logo {
    max-width: 150px;
    margin-bottom: 1rem;
  }
 .footer-section p a,  .footer-section ul li  a {
    color: #D9E2F0;
    text-decoration: none !important;
  }

  @media(max-width:900px){
    .footer-content {
    padding: 0;
}
.footer {
    padding: 2rem 1.6rem; 
}
.footer-content .footer-section h4{
    margin-bottom: 10px;
}
  }

  </style>
  
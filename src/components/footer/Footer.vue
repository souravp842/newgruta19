<template>
    <footer class="footer">
      <div class="footer-content">
        <!-- Left section -->
        <div class="footer-section">
          <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
          <p>Espacios de trabajo exclusivos para profesionales y empresas, diseñados para potenciar tu productividad y bienestar.</p>
          <p>Cerrada de Gruta 19, Jardines del Pedregal<br />
          Álvaro Obregón 01900<br />
          +52 55 3224 3451<br />
          contacto@gruta19corp.com</p>
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
        <div class="footer-section">
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
    background-color: #1d1e20;
    color: white;
    padding: 2rem 1rem;
    font-family: Arial, sans-serif;
  }
  
  .footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
  }
  
  .footer-section {
    flex: 1;
    min-width: 200px;
  }
  
  .footer-section h4 {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  
  .footer-section ul {
    list-style: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin: 0.3rem 0;
  }
  
  .footer-section ul li a {
    color: white;
    text-decoration: none;
  }
  
  .footer-section ul li a:hover {
    text-decoration: underline;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 2rem;
    border-top: 1px solid #444;
    padding-top: 1rem;
    font-size: 0.9rem;
    color: #aaa;
  }
  
  .logo {
    max-width: 150px;
    margin-bottom: 1rem;
  }
  </style>
  
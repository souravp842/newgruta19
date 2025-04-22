<template>
    <div class="contact-container">
      <div class="contact-info">
        <h2>CONTÁCTANOS</h2>
        <p>Agenda una visita o solicita más información sobre nuestros espacios</p>
        <ul>
          <li> Cerrada de Gruta 19, Jardines del Pedregal, Álvaro Obregón 01900</li>
          <li>+52 55 3224 3451</li>
          <li> contacto@gruta19corp.com</li>
        </ul>
      </div>
      <form @submit.prevent="handleSubmit" class="contact-form">
      <label>
        Nombre
        <input  type="text" required />
      </label>
      <label>
        Mail
        <input type="email" required />
      </label>
      <label>
        Teléfono
        <input type="tel" />
      </label>
      <label>
        Mensaje
        <textarea required></textarea>
      </label>
      <button type="submit">Enviar mensaje</button>
    </form>
      </div>
  </template>




<style scoped>
.contact-container {
  display: flex;
  justify-content: space-between;
  background-color: gray;
  color: #fff;
  padding: 2rem;
  border-radius: 12px;
}

.contact-info {
  max-width: 45%;
}

.contact-info h2 {
  font-size: 1.8rem;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info li {
  margin: 0.5rem 0;
}

.contact-form {
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  background-color: #000;
  color: #fff;
}

.contact-form button {
  background-color: #f97316;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
}
</style>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
})

</script>

<template>
    <div class="an-contact-container">
      <div class="an-contact-wraper">
      <div class="an-contact-info">
        <h2>CONTÁCTANOS</h2>
        <p>{{ title }}</p>
        <ul>
          <li> <span class="svg"><svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.74062 15.6205C8.34375 13.6143 12 8.75176 12 6.02051C12 2.70801 9.3125 0.0205078 6 0.0205078C2.6875 0.0205078 0 2.70801 0 6.02051C0 8.75176 3.65625 13.6143 5.25938 15.6205C5.64375 16.0986 6.35625 16.0986 6.74062 15.6205ZM6 4.02051C6.53043 4.02051 7.03914 4.23122 7.41421 4.60629C7.78929 4.98137 8 5.49007 8 6.02051C8 6.55094 7.78929 7.05965 7.41421 7.43472C7.03914 7.80979 6.53043 8.02051 6 8.02051C5.46957 8.02051 4.96086 7.80979 4.58579 7.43472C4.21071 7.05965 4 6.55094 4 6.02051C4 5.49007 4.21071 4.98137 4.58579 4.60629C4.96086 4.23122 5.46957 4.02051 6 4.02051Z" fill="#F97316"/>
</svg>
</span> {{ location }}</li>
          <li> <span class="svg"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.15312 1.26897C4.9125 0.687716 4.27812 0.378341 3.67188 0.543966L0.921875 1.29397C0.378125 1.44397 0 1.93772 0 2.50022C0 10.2315 6.26875 16.5002 14 16.5002C14.5625 16.5002 15.0563 16.1221 15.2063 15.5783L15.9563 12.8283C16.1219 12.2221 15.8125 11.5877 15.2312 11.3471L12.2312 10.0971C11.7219 9.88459 11.1313 10.0315 10.7844 10.4596L9.52188 12.0002C7.32188 10.9596 5.54063 9.17834 4.5 6.97834L6.04063 5.71897C6.46875 5.36897 6.61562 4.78147 6.40312 4.27209L5.15312 1.27209V1.26897Z" fill="#F97316"/>
</svg>
</span>{{ tel }}</li>
          <li> <span class="svg"><svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 0.5C0.671875 0.5 0 1.17188 0 2C0 2.47187 0.221875 2.91562 0.6 3.2L7.4 8.3C7.75625 8.56563 8.24375 8.56563 8.6 8.3L15.4 3.2C15.7781 2.91562 16 2.47187 16 2C16 1.17188 15.3281 0.5 14.5 0.5H1.5ZM0 4V10.5C0 11.6031 0.896875 12.5 2 12.5H14C15.1031 12.5 16 11.6031 16 10.5V4L9.2 9.1C8.4875 9.63438 7.5125 9.63438 6.8 9.1L0 4Z" fill="#F97316"/>
</svg>
</span>{{ email }}</li>
        </ul>
      </div>
      <form  class="an-contact-form">
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
    </div>
  </template>

<style scoped>
.an-contact-container {
    background: #1C2023;
    padding: 50px 0;
}
.an-contact-wraper {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 45px;
    display: flex;
    align-items: flex-start;
    gap: 40px;
    justify-content: space-between;
}
.an-contact-info {
    width: 50%;
}
form.an-contact-form {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 25px;
}
.an-contact-info h2 {
    color: #FFFFFF;
    font-size: 50px;
    line-height: 100%;
    font-family: "Voltaire", sans-serif;
    letter-spacing: 0;
}
.an-contact-info p {
    margin: 30px 0;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0;
    color: #D9E2F0;
    font-family: "Voltaire", sans-serif;
}
.an-contact-info  ul {
    padding: 0;
    list-style: none;
}
.an-contact-info  ul li {
    margin-bottom: 20px;
    color: #D9E2F0;
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0;
    display: inline-flex;
    align-items: center;
    width: 100%;
    gap: 10px;
    font-family: "Voltaire", sans-serif;
    max-width: 470px;
}
.an-contact-info ul li svg {
    height: 16px;
    width: 16px;
}
form.an-contact-form label {
    display: inline-flex;
    flex-direction: column;
    gap: 10px;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0;
    color: #FFFFFF;
    font-family: "Voltaire", sans-serif;
}
form.an-contact-form label input,form.an-contact-form label textarea {
    width: 100%;
    background: #00000080;
    border: none;
    outline: none;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0;
    color: #FFFFFF;
    font-family: "Voltaire", sans-serif;
    padding: 13px;
    border-radius: 8px;
}
form.an-contact-form button {
    background: #F97316;
    border: none;
    outline: none;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0;
    color: #FFFFFF;
    font-family: "Voltaire", sans-serif;
    padding: 13px;
    border-radius: 8px;
}

@media(max-width:900px){
  .an-contact-wraper {
    flex-direction: column;
    padding: 0 15px;
    gap: 20px;
}
.an-contact-info {
    width: 100%;
}
.an-contact-info  ul li {
    max-width:unset;
}
form.an-contact-form{
    width: 100%;
}
}
</style>


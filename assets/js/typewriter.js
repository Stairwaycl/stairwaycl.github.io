// Esperamos a que el DOM esté cargado para evitar errores
document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('typewriter-hero');
  const text = "Software de Alto Rendimiento para tu Negocio. 🚀";
  let index = 0;

  function type() {
    if (index < text.length) {
      // Agregamos la letra actual al contenido del elemento
      element.innerHTML += text.charAt(index);
      index++;
      // Llamamos a la función de nuevo después de un breve retraso
      setTimeout(type, 100); // 100ms entre cada letra
    }
  }

  // Iniciamos la función
  type();
});

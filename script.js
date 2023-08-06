const text = "ETL developer y programadora en Python con conocimientos de Infraestructura y Back end.";
let index = 0;
const typingSpeed = 50; // Velocidad de escritura (milisegundos)

function typingAnimation() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(typingAnimation, typingSpeed);
  }
}

typingAnimation();
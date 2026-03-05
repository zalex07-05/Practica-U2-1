// Colores para el fondo 
const colors = [ "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ccebff"]; 
let colorIndex = 0;
const memberDivColors = [ "#ffe0e0", "#e0ffe0", "#e0e0ff", "#ffffe0", "#e7f5ff"];
let memberDivColorIndex = 0;
 
 
// Datos de los integrantes 
const members = [ 
  { photo: "imagen_equipo/alumno1.webp", desc: "Alumno: Janet Arredondo Delgado <br><br> Descripción: Soy estudiante 6to. semestre de la carrera de ingenieria en sistemas computacionales, me gusta dibujar y escuchar música." }, 
  { photo: "imagen_equipo/alumno2.jpeg", desc: "Alumno: Alex Ivan Mexicano Zuñiga <br><br> Descripción:Soy estudiante de la carrera de ingenieria en sistemas computacionales, me gusta el futbol, y ver series" } 
]; 
let memberIndex = 0; 
 
// Botón cambio de color 
document.getElementById("colorButton").addEventListener("click", () => { 
  document.body.style.backgroundColor = colors[colorIndex]; 
  colorIndex = (colorIndex + 1) % colors.length; 
  const memberDiv = document.getElementById("member-section");
  memberDiv.style.backgroundColor = memberDivColors[memberDivColorIndex];
  memberDivColorIndex = (memberDivColorIndex + 1) % memberDivColors.length;
}); 
 
// Botón cambio de integrante 
document.getElementById("switchButton").addEventListener("click", () => {
  memberIndex = (memberIndex + 1) % members.length;

  const img = document.getElementById("member-photo");
  img.src = members[memberIndex].photo;
  const btn = document.getElementById("switchButton");
  btn.textContent = memberIndex === 0 ? "Mostrar integrante 2" : "Mostrar integrante 1";

  img.onerror = () => {
    console.log("No se pudo cargar la imagen:", members[memberIndex].photo);
  };

  document.getElementById("member-desc").innerHTML = members[memberIndex].desc;
});

//Hora actual
function mostrarHora() {

  const ahora = new Date();

  let horas = String(ahora.getHours()).padStart(2,"0");
  let minutos = String(ahora.getMinutes()).padStart(2,"0");
  let segundos = String(ahora.getSeconds()).padStart(2,"0");

  document.getElementById("hora").innerHTML =
    "Hora actual: " + horas + ":" + minutos + ":" + segundos;
}

// ejecutar cada segundo
setInterval(mostrarHora, 1000);

// ejecutar al cargar
mostrarHora();
let inicio = 0;
const proyectos = document.getElementById('proyectos');
const totalP = proyectos.children.length;

function moverPlantilla(lado) {
  inicio = (inicio + lado + totalP) % totalP;
  proyectos.style.transform = `translateX(-${inicio * 700}px)`;
}
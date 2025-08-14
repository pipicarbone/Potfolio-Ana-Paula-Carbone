let inicio = 0;
const proyectos = document.getElementById('proyectos');
const totalP = proyectos.children.length;

function moverPlantilla(lado) {
  inicio = (inicio + lado + totalP) % totalP;
  proyectos.style.transform = `translateX(-${inicio * 700}px)`;
}


const navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (evento) => {

    evento.preventDefault();
    
    const Id = link.getAttribute('href');
    
    const tarjeta = document.querySelector(Id);
    
    if (tarjeta) {
      tarjeta.scrollIntoView({
        behavior: 'smooth' 
      });
    }
  });
});

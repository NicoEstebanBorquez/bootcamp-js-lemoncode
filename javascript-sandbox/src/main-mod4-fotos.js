import "./style.css";
console.log("Hello from mod4");

function cambiarFotoPrincipal(idMiniatura) {
  const fotoPrincipal = document.getElementById("foto-principal");
  const fotoMiniatura = document.getElementById(idMiniatura);

  fotoPrincipal.src = fotoMiniatura.src;
}

const miniatura1 = document.getElementById("miniatura1");
const miniatura2 = document.getElementById("miniatura2");
const miniatura3 = document.getElementById("miniatura3");

miniatura1.addEventListener("click", () => {
  cambiarFotoPrincipal("miniatura1");
});

miniatura2.addEventListener("click", () => {
  cambiarFotoPrincipal("miniatura2");
});

miniatura3.addEventListener("click", () => {
  cambiarFotoPrincipal("miniatura3");
});

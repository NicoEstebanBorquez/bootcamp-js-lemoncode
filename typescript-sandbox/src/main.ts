import "./style.css";

function cambiarFotoPrincipal(idMiniatura: string) {
  const fotoPrincipal = document.getElementById(
    "foto-principal"
  ) as HTMLImageElement;
  const fotoMiniatura = document.getElementById(
    idMiniatura
  ) as HTMLImageElement;

  if (
    fotoPrincipal !== null &&
    fotoPrincipal != undefined &&
    fotoMiniatura !== null &&
    fotoMiniatura !== undefined
  ) {
    fotoPrincipal.src = fotoMiniatura.src;
  }
}

const miniatura1 = document.getElementById("miniatura1");
const miniatura2 = document.getElementById("miniatura2");
const miniatura3 = document.getElementById("miniatura3");

if (miniatura1 !== null && miniatura1 !== undefined) {
  miniatura1.addEventListener("click", () => {
    cambiarFotoPrincipal("miniatura1");
  });
}
if (miniatura2 !== null && miniatura2 !== undefined) {
  miniatura2.addEventListener("click", () => {
    cambiarFotoPrincipal("miniatura2");
  });
}

if (miniatura3 !== null && miniatura3 !== undefined) {
  miniatura3.addEventListener("click", () => {
    cambiarFotoPrincipal("miniatura3");
  });
}

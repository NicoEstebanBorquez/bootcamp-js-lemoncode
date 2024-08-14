import { handleCompruebaClick, iniciaPartida } from "./ui";

// "DOMContentLoaded significa que llamará a la función 'iniciaPartida' una vez que el DOM se haya cargado"
document.addEventListener("DOMContentLoaded", iniciaPartida);

const botonComprobar = document.getElementById("comprobar");
botonComprobar?.addEventListener("click", handleCompruebaClick);

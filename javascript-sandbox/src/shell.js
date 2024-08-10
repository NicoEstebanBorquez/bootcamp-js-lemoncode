import { setNumeroParaAcertar, setNumeroIntentos } from "./modelo";
import { generarNumeroAleatorio } from "./motor";
import { muestraNumeroIntentos } from "./ui";

const inicializarPartida = () => {
  setNumeroParaAcertar(generarNumeroAleatorio());
  setNumeroIntentos(0);
  muestraNumeroIntentos();
};

// "DOMContentLoaded significa que llamará a la función 'inicializarPartida' una vez que el DOM se haya cargado"
document.addEventListener("DOMContentLoaded", inicializarPartida);

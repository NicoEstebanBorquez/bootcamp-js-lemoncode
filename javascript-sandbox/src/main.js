const generarNumeroAleatorio = () => Math.floor(Math.random() * 101);
const numeroParaAcertar = generarNumeroAleatorio();
console.log(numeroParaAcertar);

const NO_ES_UN_NUMERO = 0;
const EL_NUMERO_ES_MAYOR = 1;
const EL_NUMERO_ES_MENOR = 2;
const ES_EL_NUMERO_SECRETO = 3;
const GAME_OVER_MAXIMO_INTENTOS = 4;
const MAXIMO_INTENTOS = 5;

let numeroIntentos = 0;

const hasSuperadoNumeroMaximoIntentos = () => numeroIntentos >= MAXIMO_INTENTOS;

const muestraMensajeComprobacion = (texto, estado) => {
  let mensaje = "";

  switch (estado) {
    case NO_ES_UN_NUMERO:
      mensaje = `"${texto}" no es un número!`;
      break;
    case EL_NUMERO_ES_MAYOR:
      mensaje = `Ooops, no has acertado! ${texto} es mayor que el número secreto.`;
      break;
    case EL_NUMERO_ES_MENOR:
      mensaje = `Ooops, no has acertado! ${texto} es menor que el número secreto.`;
      break;
    case ES_EL_NUMERO_SECRETO:
      mensaje = `Has acertado!`;
      break;
    case GAME_OVER_MAXIMO_INTENTOS:
      mensaje = `GAME OVER! Has superado el número máximo de intentos.`;
      break;
    default:
      mensaje = "Error! No sé que ha pasado, pero no deberíamos estar aquí.";
      break;
  }

  document.getElementById("resultado").innerHTML = mensaje;
};

const muestraNumeroIntentos = () => {
  document.getElementById("intentos").innerHTML =
    `${numeroIntentos} de ${MAXIMO_INTENTOS}`;
};

// "DOMContentLoaded significa que llamará a la función 'muestraNumeroIntentos' una vez que el DOM se haya cargado"
document.addEventListener("DOMContentLoaded", muestraNumeroIntentos);

const gestionarGameOver = (estado) => {
  if (estado === GAME_OVER_MAXIMO_INTENTOS) {
    document.getElementById("comprobar").disabled = true;
  }
};

const comprobarNumero = (texto) => {
  const numero = parseInt(texto);
  const esNumero = !isNaN(numero);

  if (!esNumero) {
    return NO_ES_UN_NUMERO;
  }

  if (hasSuperadoNumeroMaximoIntentos()) {
    return GAME_OVER_MAXIMO_INTENTOS;
  }

  if (numero === numeroParaAcertar) {
    return ES_EL_NUMERO_SECRETO;
  }

  return numero > numeroParaAcertar ? EL_NUMERO_ES_MAYOR : EL_NUMERO_ES_MENOR;
};

const handleCompruebaClick = () => {
  const texto = document.getElementById("numero").value;
  const estado = comprobarNumero(texto);
  muestraMensajeComprobacion(texto, estado);
  numeroIntentos++;
  muestraNumeroIntentos();
  gestionarGameOver(estado);
};

const botonComprobar = document.getElementById("comprobar");
botonComprobar.addEventListener("click", handleCompruebaClick);

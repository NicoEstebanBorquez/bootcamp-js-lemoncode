const generarNumeroAleatorio = () => Math.floor(Math.random() * 101);
const numeroParaAcertar = generarNumeroAleatorio();
console.log(numeroParaAcertar);

const NO_ES_UN_NUMERO = 0;
const EL_NUMERO_ES_MAYOR = 1;
const EL_NUMERO_ES_MENOR = 2;
const ES_EL_NUMERO_SECRETO = 3;

const muetraMensajeComprobacion = (texto, estado) => {
  let mensaje = "";

  switch (estado) {
    case NO_ES_UN_NUMERO:
      mensaje = `"${texto}" no es un número!`;
      break;
    case EL_NUMERO_ES_MAYOR:
      mensaje = `Ooops, no has acertado! ${texto} es mayor que el número secreto`;
      break;
    case EL_NUMERO_ES_MENOR:
      mensaje = `Ooops, no has acertado! ${texto} es menor que el número secreto`;
      break;
    case ES_EL_NUMERO_SECRETO:
      mensaje = "Has acertado!";
      break;
    default:
      mensaje = "";
      break;
  }

  document.getElementById("resultado").innerHTML = mensaje;
};

const comprobarNumero = (texto) => {
  const numero = parseInt(texto);
  const esNumero = !isNaN(numero);

  if (!esNumero) {
    return NO_ES_UN_NUMERO;
  }

  if (numero === numeroParaAcertar) {
    return ES_EL_NUMERO_SECRETO;
  }

  return numero > numeroParaAcertar ? EL_NUMERO_ES_MAYOR : EL_NUMERO_ES_MENOR;
};

const handleCompruebaClick = () => {
  const texto = document.getElementById("numero").value;
  const estado = comprobarNumero(texto);
  muetraMensajeComprobacion(texto, estado);
};

const botonComprobar = document.getElementById("comprobar");
botonComprobar.addEventListener("click", handleCompruebaClick);

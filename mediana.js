const lista1 = [100, 200, 400, 900, 4000000];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;

if (esPar(lista1.length)) {
} else {
  mediana = lista1[mitadLista1];
}

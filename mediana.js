function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

const lista1 = [100, 200, 900, 4000000];

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
  const elemento1 = lista1[mitadLista1 - 1];
  const elemento2 = lista1[mitadLista1];

  const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

  mediana = promedioElemento1y2;
} else {
  mediana = lista1[mitadLista1];
}

//Reto de función:

function calcularMediana(lista) {
  const inputMediana = document.getElementById("inputMediana");
  const medianaValue = Number(inputMediana.value);

  // const listaOrdenadaMetodoSort = arrayMediana.sort(
  //   (numMenor, numMayor) => numMenor - numMayor
  // );

  const mitadLista = parseInt(lista.length / 2);

  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  let mediana;

  if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElemento1y2;
  } else {
    mediana = lista[mitadLista];
  }

  const mostrarResultado = document.getElementById("resultadoMediana");
  mostrarResultado.innerText = "La mediana es de: " + mediana;
}

const lista1 = [1, 2, 3, 4, 2, 1, 2, 4];

//convertir array en objeto
const lista1Contar = {};

lista1.map(function (elemento) {
  if (lista1Contar[elemento]) {
    lista1Contar[elemento] += 1;
  } else {
    lista1Contar[elemento] = 1;
  }
});

//convertir el objero de nuevo a array, para poder utilizar el metodo sort
const lista1Array = Object.entries(lista1Contar).sort(function (
  elementoA,
  elementoB
) {
  return elementoA[1] - elementoB[1];
});

//Buscamos entrar a la ultima posicion:moda
const moda = lista1Array[lista1Array.length - 1];

//reto convertir todo a una funcion

function calcularModa
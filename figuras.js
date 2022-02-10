//Código cuadrado

console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El area del cuadrado mide: " + areaCuadrado + "cm cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd("Cuadrado");

//Código triángulo

console.group("Triángulo");

// const ladoTriangulo1 = 6;

// const ladoTriangulo2 = 6;

// const basetriangulo = 4;

// console.log(
//   "Los lados del triangulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     basetriangulo +
//     "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo);

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + basetriangulo;
// console.log("El perimetro del triangulo mide: " + perimetroTriangulo + "cm");

// const areaTriangulo = (basetriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo mide: " + areaTriangulo + "cm cuadrados");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd("Triángulo");

//Código circulo

console.group("circulo");

// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del Circulo es: " + diametroCirculo + "cm");

// const PI = Math.PI;
// console.log("El PI es: " + PI);

// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del Circulo es: " + perimetroCirculo + "cm");

// const areaCirculo = radioCirculo * radioCirculo * PI;
// console.log("El area del Circulo es: " + areaCirculo + "cm cuadrados");

function diametroCirculo(radio) {
  return radio * 2;
}

const PI = Math.PI;
console.log("El PI es: " + PI);

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd("circulo");

//Interacción con HTML

//CUADRADO
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//TRIANGULO
function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("InputTrianguloLado1");
  const valueLado1 = Number(inputLado1.value);

  const inputLado2 = document.getElementById("InputTrianguloLado2");
  const valueLado2 = Number(inputLado2.value);

  const inputBase = document.getElementById("InputTrianguloBase");
  const valueBase = Number(inputBase.value);

  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);

  alert(perimetro);
}

function calcularAreaTriangulo() {
  const inputAltura = document.getElementById("InputTrianguloAltura");
  const valueAlt = Number(inputAltura.value);

  const inputBase = document.getElementById("InputTrianguloBaseArea");
  const valueBas = Number(inputBase.value);

  const area = areaTriangulo(valueBas, valueAlt);
  alert(area);
}

//CIRCULO
function calcularPerimetroCirculo() {
  const inputRadio = document.getElementById("InputCirculo");
  const value = inputRadio.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}
function calcularAreaCirculo() {
  const inputRadio = document.getElementById("InputCirculo");
  const value = inputRadio.value;

  const area = areaCirculo(value);
  alert(area);
}

//Triangulo isosceles

function alturaIsosceles(lado1, lado2, base) {
  if (lado1 !== lado2 || lado1 == base) {
    return "Esto no es un isosceles";
  }
  const altura = Math.sqrt(lado1 * lado1 - (base * base) / 4);
  return altura;
}

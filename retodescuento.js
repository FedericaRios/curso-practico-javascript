// const precioOriginal = 100;
// const descuento = 15;

function calcularPecioConDescuento(precio, descuento) {
  const porcentajePrecioConDecuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDecuento) / 100;

  return precioConDescuento;
}

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDecuento,
//   precioConDescuento,
// });

function onClickButtonPrice() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("inputDiscount");
  const discuntValue = Number(inputDiscount.value);

  const selecCupon = document.getElementById("selecCupon");
  const valueCupon = selecCupon.value;

  const valorNumericoCupon = obtenerValorCupon(valueCupon);

  const descuentosTotales = valorNumericoCupon + discuntValue;
  //   console.log("valorNumericoCupon", valorNumericoCupon);
  //   console.log("descuentosTotales", descuentosTotales);

  const precioConDescuento = calcularPecioConDescuento(
    priceValue,
    descuentosTotales
  );

  const resultP = document.getElementById("resultP");
  resultP.innerText =
    "Tu precio final con descuento y cupon incluidos es: $" +
    precioConDescuento;
}

function obtenerValorCupon(cupon) {
  switch (cupon) {
    case "Cupon common":
      return 10;
    case "Cupon intermediate":
      return 35;
    case "Cupon premium":
      return 50;
    default:
      break;
  }
}

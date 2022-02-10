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
  const discuntValue = inputDiscount.value;

  const precioConDescuento = calcularPecioConDescuento(
    priceValue,
    discuntValue
  );

  const resultP = document.getElementById("resultP");
  resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
}

function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em real(BRL) é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function Converter2() {
  var valorElemento = document.getElementById("valor2");
  var valor2 = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor2);

  var valorEmRealDolar = valorEmRealNumerico / 5;
  console.log(valorEmRealDolar);

  var elementoValorConvertido2 = document.getElementById("valorConvertido2");
  var valorConvertido2 = "O valor em dólar é $ " + valorEmRealDolar;
  elementoValorConvertido2.innerHTML = valorConvertido2;
}

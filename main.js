function converter() {
  
    var valorPedido = document.getElementById("valor");
  
    var valor = valorPedido.value;
    var valorDecimal = parseFloat(valor);
  
    //convertendo em real
    var valorReal = valorDecimal * 5.22;
  
    //arredondando
    var valorRealArredondado = valorReal.toFixed(2) 
  
    //convertendo em Euro
    var valorEuro = valorDecimal * 0.85;
    //arredondando
    var valorEuroArredondado = valorEuro.toFixed(2);
  
    //apresentando na tela
    var RealConvertido = document.getElementById("real");
    var EuroConvertido = document.getElementById("euro");

    //apresentando o valor do real na tela
    var valorEmRealConvertido = `O resultado convertido em real é R$ ${valorRealArredondado}` 
    RealConvertido.innerHTML = valorEmRealConvertido;

    //apresentando o valor do euro na tela
    var valorEmEuroConvertido = `O resultado convertido em Euro é EUR ${valorEuroArredondado}`
    EuroConvertido.innerHTML = valorEmEuroConvertido;

}
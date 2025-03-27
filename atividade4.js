function calcularValorTotal(precoUnitario, quantidade) {
    return precoUnitario * quantidade;
  }
  
  function aplicarDesconto(valorTotal) {
    if (valorTotal > 100) {
      return valorTotal * 0.9;
    } else {
      return valorTotal;
    }
  }
  
  function exibirResumo(valorTotal, valorComDesconto) {
    console.log(`Valor total antes do desconto: R$ ${valorTotal.toFixed(2)}`);
    console.log(`Valor final com o desconto aplicado: R$ ${valorComDesconto.toFixed(2)}`);
  }
  
  let precoUnitario = parseFloat(prompt("Digite o preço unitário do produto:"));
  let quantidade = parseInt(prompt("Digite a quantidade comprada:"));
  
  let valorTotal = calcularValorTotal(precoUnitario, quantidade);
  let valorComDesconto = aplicarDesconto(valorTotal);
  
  exibirResumo(valorTotal, valorComDesconto);
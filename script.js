//variaveis globais
let prato;
let bebida;
let sobremesa;
let pratoPreco;
let bebidaPreco;
let sobremesaPreco;
let pratoValor;
let bebidaValor;
let sobremedaValor;
let pontoPratoFinal;
let pontoBebidaFinal;
let pontoSobremesaFinal;
let valorTotal;
let valorTotalPonto;
let valorTotalVirgula;
let nome;
let endereco;

function selecionarPrato (nomePrato) {
    console.log(nomePrato);

    const pratoSelecionado = document.querySelector(".prato-selecionado");
    if (pratoSelecionado !== null) {

        pratoSelecionado.classList.remove("prato-selecionado");
    }

    nomePrato.classList.add("prato-selecionado");

    prato = document.querySelector(".prato-selecionado > .option-title");
    console.log(prato.textContent);
    
    pratoPreco = document.querySelector(".prato-selecionado > .option-footer > .option-price > .price");
    pratoValor = (pratoPreco.textContent);
    console.log(pratoValor);

    avancarPedido ();
}    

function selecionarBebida (nomeBebida) {
    console.log(nomeBebida);

    const bebidaSelecionado = document.querySelector(".bebida-selecionado");
    if (bebidaSelecionado !== null) {

        bebidaSelecionado.classList.remove("bebida-selecionado");
    }

    nomeBebida.classList.add("bebida-selecionado");
    bebida = document.querySelector(".bebida-selecionado > .option-title");
    console.log(bebida.textContent);

    bebidaPreco = document.querySelector(".bebida-selecionado > .option-footer > .option-price > .price");
    bebidaValor = (bebidaPreco.textContent);
    console.log(bebidaValor);
    
    avancarPedido ();
}

function selecionarSobremesa (nomeSobremesa) {
    console.log(nomeSobremesa);

    const sobremesaSelecionado = document.querySelector(".sobremesa-selecionado");
    if (sobremesaSelecionado !== null) {

        sobremesaSelecionado.classList.remove("sobremesa-selecionado");
    }

    nomeSobremesa.classList.add("sobremesa-selecionado");
    sobremesa = document.querySelector(".sobremesa-selecionado > .option-title");
    console.log(sobremesa.textContent);

    sobremesaPreco = document.querySelector(".sobremesa-selecionado > .option-footer > .option-price > .price");
    sobremesaValor = (sobremesaPreco.textContent);
    console.log(sobremesaValor);

    
    avancarPedido ();
}

function avancarPedido () {
    if (prato && bebida && sobremesa) {
        const avancar = document.querySelector(".button");
        avancar.classList.add("avaiable");
        avancar.disabled = false;
        console.log(avancar);
    }

    const finalizar = document.querySelector(".avaiable");
    finalizar.innerHTML = "Fechar pedido";
    
}

function fecharPedido () {
    nome = prompt("Qual seu nome?");
    endereco = prompt("Qual seu endereço?");

    const fechar = document.querySelector(".escondido");
    fechar.classList.remove("escondido");

    const pratoFinal = document.querySelector(".nome-prato");
    pratoFinal.innerHTML = prato.textContent;

    const precoPratoFinal = document.querySelector(".preco-prato");
    precoPratoFinal.innerHTML = `R$ ${pratoPreco.textContent}`;

    const bebidaFinal = document.querySelector(".nome-bebida");
    bebidaFinal.innerHTML = bebida.textContent;

    const precoBebidaFinal = document.querySelector(".preco-bebida");
    precoBebidaFinal.innerHTML = `R$ ${bebidaPreco.textContent}`;
    
    const sobremesaFinal = document.querySelector(".nome-sobremesa");
    sobremesaFinal.innerHTML = sobremesa.textContent;

    const precoSobremesaFinal = document.querySelector(".preco-sobremesa");
    precoSobremesaFinal.innerHTML = `R$ ${sobremesaPreco.textContent}`;

    pontoPratoFinal = parseFloat(pratoValor.replace(',','.'));
    pontoBebidaFinal = parseFloat(bebidaValor.replace(',','.'));
    pontoSobremesaFinal = parseFloat(sobremesaValor.replace(',','.'));

    const valorTotal = pontoPratoFinal + pontoBebidaFinal + pontoSobremesaFinal;
    const valorTotalPonto = (valorTotal).toFixed(2);
    const valorTotalVirgula = valorTotalPonto.replace('.',',');
    const Total = document.querySelector(".preco-total");
    Total.innerHTML = `R$ ${valorTotalVirgula}`;
  

}



function finalizarWhatsapp() {
    
    pontoPratoFinal = parseFloat(pratoValor.replace(',','.'));
    pontoBebidaFinal = parseFloat(bebidaValor.replace(',','.'));
    pontoSobremesaFinal = parseFloat(sobremesaValor.replace(',','.'));

    const valorTotal = pontoPratoFinal + pontoBebidaFinal + pontoSobremesaFinal;
    const valorTotalPonto = (valorTotal).toFixed(2);

    const mensagem = `Olá, gostaria de fazer o pedido: \n 
    - Prato: ${prato.textContent} \n 
    - Bebida: ${bebida.textContent} \n 
    - Sobremesa: ${sobremesa.textContent} \n 
    Total: R$ ${valorTotalPonto}\n 
    Nome: ${nome} \n 
    Endereço: ${endereco}`;

    const link = encodeURIComponent(mensagem);
    window.open(`https://wa.me/5511958174303?text=${mensagem}`,'_blank');
}



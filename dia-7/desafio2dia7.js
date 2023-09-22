let saldo = 1000;
let maiorValorInserido = 0;
let somaValoresInseridos = 0;
let totalTransacoes = 0;
let continuar = false

do{
    const nome = prompt('Digite seu nome: ');
    const cpf = prompt('Digite seu CPF: ');
    const valor = Number(prompt('Digite o valor da transação: R$ '));
    const operacao = prompt('Qual operação deseja realizar: [ DEPÓSITO ] [ SAQUE ]')

    if(valor < 0){
        console.log('Valor inválido! A transação não foi realizada.');
    } else if (operacao == 'SAQUE' && valor > saldo) {
        console.log('Saldo insuficiente! A transação não foi realizada.');
    } else if (operacao == 'SAQUE') {
        console.log('Olá, ' + nome + ' ! ' + '(' + cpf + '), seu saldo atual é de: R$ ' + saldo);
        saldo -= valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if(valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log('Transação realizada com sucesso! Seu saldo atual é de: R$ ' + saldo);
    }
    const opcao = prompt('Deseja continuar? [ SIM ] ou [ NÃO ].')
    if(opcao == 'SIM'){
        continuar = true
    } else if (opcao == 'NÃO') {
        continuar = false
    }
} while(continuar)

console.log('Saldo final: R$ ' + saldo);
console.log('Maior valor inserido: R$ ' + maiorValorInserido);
console.log('Média dos valores inseridos: R$ ' + (somaValoresInseridos / totalTransacoes));


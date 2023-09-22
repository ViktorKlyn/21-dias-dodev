// Deaclarando Variáveis:
let nome = ""
let idade = 0
let peso = 0
let altura = 0

// Solicitando informações ao usuário e atribuindo valores as Variáveis:
nome = prompt('Digite seu nome: ')
idade = parseInt(prompt('Digite sua idade: '))
peso = parseFloat(prompt('Digite seu peso: '))
altura = parseFloat(prompt('Digite sua altura: '))

// Calculando o ano em que a pessoa nasceu e o seu IMC:
let anoNasc = 0
anoNasc = 2023 - idade

let imc = 0
imc = peso / (altura * altura)

// Exibindo as informações no console:
console.log('Olá ' + nome + ', você tem ' + idade + ' anos, nasceu em: ' + anoNasc + ' , tem ' + altura + ' de altura, pesa ' + peso + ' kg, e sue IMC é ' + imc + ' kg/m2') 


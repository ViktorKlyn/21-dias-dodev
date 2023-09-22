let nome = prompt('Seu nome: ')
let idade = prompt('Sua idade: ')
let cm = prompt('Você possuí carteira de motorista?')
let carro = prompt('Você possuí carro?')

if(idade <18 && cm == 'não'){
    console.log(nome, 'você não pode digirir!')
}

if(idade >=18 && cm == 'sim' && carro == 'não'){
    console.log(nome, 'você pode dirigir, mas não tem carro!')
}

if(idade >=18 && cm == 'sim' && carro == 'sim'){
    console.log(nome, 'você será o motorista!')
}
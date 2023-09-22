let fome = prompt('Você está com fome?')
let dinheiro = prompt('Você tem dinheiro?')
let restaurante = prompt('O restaurante está aberto?')

if(fome == 'não' || dinheiro == 'não'){
    console.log('Hoje a janta será em casa!')
}else if(fome == 'sim' && dinheiro == 'sim' && restaurante == 'não')
    console.log('Peça um delivery')
if(fome == 'sim' && dinheiro == 'sim' && restaurante == 'sim'){
    console.log('Hoje o seu jantar será no seu restaurante preferido!')
}

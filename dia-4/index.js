let idade = Number(prompt('Insira a sua idade'))
let nome = prompt('Insira seu nome')
// == igual | != diferente | > menor que | < maior que | >= menor ou igual | <= maior ou igual
// === é igual o valor e o tipo | !== é diferente o valor e o tipo

if(idade == 17 && nome == "Klein"){
    console.log('O seu nome é Klein e você tem 17 anos')
}else if(idade == 17 || nome == 'Klein'){
    console.log('Você se chama Klein ou tem 17 anos')
}else{
    console.log('O seu nome não é Klein e você não tem 17 anos')
}


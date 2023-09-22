let condicao = true;
while(condicao === true){
    let idade = Number(prompt('Insira a sua idade: '))
    if(idade < 18){
        console.log('Você é menor de idade! ')
        condicao = false;
    }
}

console.log('Acabou o while!')
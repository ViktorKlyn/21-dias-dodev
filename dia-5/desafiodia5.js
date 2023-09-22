let n1 = Number(prompt('Digite um número: '))
let n2 = Number(prompt('Digite outro número: '))
let operação = prompt('Qual operação matemática você deseja realizar? [ x ] [ / ] [ - ] [ + ]')

switch(operação){
    case 'x':
    console.log(n1 + ' x ' + n2 + ' = ' + (n1 * n2))
    break;

    case '/':
        console.log(n1 + ' / ' + n2 + ' = ' + (n1 / n2))
        break;

    case '-':
        console.log(n1 + ' - ' + n2 + ' = ' + (n1 - n2))
        break;

    case '+':
        console.log(n1 + ' + ' + n2 + ' = ' + (n1 + n2))
        break;
}
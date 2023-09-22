let pb = console.log('Bem vindo ao posto petrobras!')
let opcao = prompt('Você desejaria abastecer o tanque com GASOLINA, ALCOOL ou CALIBRAR OS PNEUS?')

switch(opcao){
    case 'gasolina':
        qnt = prompt('Quantos R$?')
        console.log('Foram abastecidos', qnt / 5,'litros')
        break;

        case 'alcool':
            quan = prompt('Quantos R$?')
            console.log('Foram abastecidos' , quan / 3,'litros')
            break;

            case 'calibrar pneus':
                libras = prompt('Quantas Libras?')
                console.log('Foram enchidas', libras, 'libras')
                break;
} 

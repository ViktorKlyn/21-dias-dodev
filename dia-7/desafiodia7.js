let mediaGeral = 0
let qtHomens = 0
let qtMulheresAcimaDe7 = 0
let maiorNotaHomens = 0
let contador = 1

while(contador <=10){
    nota = parseInt(prompt('Digite a nota do ' + contador + 'º aluno'))
    sexo = prompt('Digite o sexo do aluno: [ M ] [ F ]')

    if(sexo == 'M'){
        if(nota > maiorNotaHomens) {
            maiorNotaHomens = nota
        }
        qtHomens++
     }
    
    if(sexo == 'F' && nota > 7){
        qtMulheresAcimaDe7++
     }

    mediaGeral += nota
    contador++
}

mediaGeral = mediaGeral / 10

console.log('A média geral dos alunos foi: ' + mediaGeral)
console.log('A quantidade de homens cadastrados foi de: ' + qtHomens)
console.log('A quantidade de mulheres que tiveram nota acima de 7 foi de: ' + qtMulheresAcimaDe7)
console.log('A maior nota entre os homens foi: ' + maiorNotaHomens)


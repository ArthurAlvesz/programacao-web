/*Implemente uma função com a seguinte assinatura: verificarNumeroPrimo(n);

A função deve verificar se o número "n" recebido é primo e retornar true, caso verdadeiro, ou false caso não seja primo.

No mesmo arquivo, faça a chamada da função para os seguintes casos de teste: */

function verificarNumeroPrimo(p) {
    if (p <= 1){
        return false;
    }
    for (let x = 2; x < p; x++ ){
        if (x % p == 0){
            return false;
        }
    }
    return true;
}

console.log(verificarNumeroPrimo(0)); 
console.log(verificarNumeroPrimo(1)); 
console.log(verificarNumeroPrimo(2)); 
console.log(verificarNumeroPrimo(3)); 
console.log(verificarNumeroPrimo(7)); 
console.log(verificarNumeroPrimo(83)); 
console.log(verificarNumeroPrimo(100)); 
console.log(verificarNumeroPrimo(991)); 
console.log(verificarNumeroPrimo(104729)); 
console.log(verificarNumeroPrimo(14348907));
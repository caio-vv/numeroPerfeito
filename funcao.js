function ehPerfeito(numero){
    let soma = 0

    for(let i = 0; i < numero; i++){
        if (numero % i === 0){
            soma += i
        }
    }
    return soma === numero
}

module.exports = {ehPerfeito}
function converterFraseEmASCII(frase) {
    let fraseConvertida = new Array(frase.length).fill(0)

    for (let i = 0; i < frase.length; i++) {
        let conversao = frase[i].charCodeAt()
        fraseConvertida[i] = conversao
    }

    return fraseConvertida
}

function criptografarVetor(vetorFraseNumerico, vetorChaveNumerico) {
    let vetorCriptografado = new Array(vetorFraseNumerico.length).fill(0)
    let j = 0
    for (let i = 0; i < vetorFraseNumerico.length; i++) {
        vetorCriptografado[i] = vetorFraseNumerico[i] + vetorChaveNumerico[j++]
        if (j === vetorChaveNumerico.length) {
            j = 0
        }
    }

    return vetorCriptografado
}

function converterASCIIEmFrase(vetorNumerico) {
    let fraseCriptografada = ''
    for (let i = 0; i < vetorNumerico.length; i++) {
        fraseCriptografada += String.fromCharCode(vetorNumerico[i])
    }
    return fraseCriptografada
}

function criarChaveNumericaAPartirDeString(palavra) {
    let passwordASCII = converterFraseEmASCII(palavra)
    let passwordASCIIString = passwordASCII.toString().replaceAll(',', '')
    let passwordASCIIVetor = passwordASCIIString.split('')
    let chave = new Array()
    for (let i = 0; i < passwordASCIIVetor.length; i++) {
        let numero = parseInt(passwordASCIIVetor[i])
        chave.push(numero)
    }
    return chave
}

function criptografarString(frase, chave) {
    let fraseConvertida = converterFraseEmASCII(frase)
    let chaveNumerica = criarChaveNumericaAPartirDeString(chave)
    let vetorCriptografado = criptografarVetor(fraseConvertida, chaveNumerica)
    let fraseCriptografada = converterASCIIEmFrase(vetorCriptografado)

    return fraseCriptografada
}

function descriptografarString(frase, chave) {
    let fraseCripografada = converterFraseEmASCII(frase)
    let j = 0
    let fraseDescriptografada = new Array()
    let chaveNumerica = criarChaveNumericaAPartirDeString(chave)
    for (let i = 0; i < frase.length; i++) {
        let numeroDescriptografadoASCII = fraseCripografada[i] - chaveNumerica[j++]
        fraseDescriptografada.push(numeroDescriptografadoASCII)
        if (j === chaveNumerica.length) {
            j = 0
        }
    }
    return converterASCIIEmFrase(fraseDescriptografada)
}
let inputChave
let inputTexto
let inputButton
let modalTitulo
let modalTexto

function carregarElementos() {
    inputChave = document.getElementById('chave')
    inputTexto = document.getElementById('texto')
    inputButton = document.getElementById('buttonExecutar')
    modalTitulo = document.getElementById('tituloDaModal')
    modalTexto = document.getElementById('textoModal')
    
}


window.addEventListener("load", function (event) {
    carregarElementos()
    inputButton.addEventListener('click', criptografia)
})


function criptografia(){
 let resultado 
 resultado =  criptografarString(inputTexto.value,inputChave.value)

 modalTexto.innerText = resultado
}
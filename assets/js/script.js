/*
Case Sensitive
Como acessar por:
Tag: getElementByTagName()
Id: getElementById()
Nome: getElementsByName()
Classe: getElementsByClassName() --> se for classe chamamos com um ponto antes
Seletor: querySelector()

se for um input podemos chamar com input#nome ou #nome no querySelector
window. antes de document é opcional
*/

/*Declação de variaveis */
let nome = window.document.getElementById("nome")
let email = document.querySelector("input#email")
let msg = document.querySelector("#msg")
let nomeOk = false
let emailOk = false
let msgOk = false
let rad = document.getElementsByName("rad")
let check = document.getElementsByName("check")
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

document.querySelector('#enviar').onclick = function (){  /* outra forma de fazer um botão - essa função não precisa de nome pois a chamamos aqui mesmo e não no html */
    if (nomeOk && emailOk && msgOk && validaRadio() && validaCheck() ) { /*pelos conteúdos aqui existentes serem booleanos, não precisamos verificar == true, pois automaticamente ele só aceitará se assim for */
        alert("Formulário enviado com sucesso!")
        location.reload() /* recarrega a página */
    }else {
        alert ("Preencha o formulário corretamente")
    }
}

function validaNome() {
    let txtNome = document.querySelector ("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    }else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || 
        email.value.indexOf(".") == -1) { /*verificação de @ e . */
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = "red"
    }else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaMensagem() {
    let txtMsg = document.querySelector("#txtMsg")
    if (msg.value.length >= 100) {
        txtMsg.innerHTML = "Limite da mensagem: 100"
        txtMsg.style.color = "red"
        msgOk = false /*isso ta definido lá no começo, mas parece que ele se perde pois sem isso aqui vai direto para true e aceita */
        /*txtMsg.style.display = "block"*/
    }else {
        /*txtMsg.style.display = "none" comentada para lembrar como faz, mas feita de outra maneira que achei menos feia a menor movimentação na tela*/
        txtMsg.innerHTML = ""
        msgOk = true
    }
}

function validaRadio() {
    var txtRad = document.querySelector("#txtRad")

    var radios = document.getElementsByName("rad");

    if (radios[0].checked || /*verificação do radio, não precisa de ==true pois o checked já faz isso */
        radios[1].checked ||
        radios[2].checked) {
        return true
    } else {
        txtRad.innerHTML = "Selecione uma rota do jogo" 
        txtRad.style.color = "red"
        return false
    }
}

function validaCheck() {
    var check = document.getElementsByName("check");

    if( check[0].checked || /*verificação do checkbox, não precisa de ==true pois o checked já faz isso */
        check[1].checked ||
        check[2].checked ||
        check[3].checked ||
        check[4].checked ) {
        return true
    } else {
        let txtCheck = document.querySelector("#txtCheck")
        txtCheck.innerHTML = "Selecione como conheceu o site"
        txtCheck.style.color = "red"
        return false
    }
}

function apagar() {
    alert("Você apagou todo o fomulário")
    location.reload()
}

/*function enviar() {
    if (nomeOk && emailOk && msgOk && validaRadio() && validaCheck() ) {
        alert("Formulário enviado com sucesso!")
        location.reload()
    }else {
        alert ("Preencha o formulário corretamente")
    }
} função trocada pela primeira da página*/

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal() {
    mapa.style.width = "600px"
    mapa.style.height = "450px"
}
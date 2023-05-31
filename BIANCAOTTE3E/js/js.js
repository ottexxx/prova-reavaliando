let enviarBtn = document.getElementById("enviar")
let nameUser = document.getElementById("user")
let emailInput = document.getElementById("email")
let numberInput = document.getElementById("contact-number")
let bgModal = document.getElementById('backmodal')

function AbrirModal(){
    bgModal.style.display = "flex"
}

function FecharModal(){
    bgModal.style.display = "none"
    emailInput.value = ""
    senhaInput.value = ""
}

window.onclick = function(click){
    if(click.target == bgModal){
        bgModal.style.display = "none"
        emailInput.value = ""
        senhaInput.value = ""
    }
}

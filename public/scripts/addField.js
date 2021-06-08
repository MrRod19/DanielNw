// procurar o botao
document.querySelector("#add-time")
//quando encontrar o botao
.addEventListener("click", cloneField)

//executar uma acao
function cloneField() {
//duplicar os campos. que campos?
const newfieldContainer = document.querySelector(".schedule-item").cloneNode(true) // boolean: true ou false

//pegar os campos. que campos?
const fields = newfieldContainer.querySelectorAll("input")

//para cada campo, limpar
fields.forEach(function(field) {
    //pegar o field do momento e limpa ele
    field.value = ""
})


// colocar na página:onde?
document.querySelector("#schedule-items").appendChild(newfieldContainer)
}
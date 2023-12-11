const tarefaInput = document.getElementById("Add-Task");
const adicionarBotão = document.getElementById("adicionar");
const listaTarefas = document.getElementById("tarefas");
adicionarBotão.addEventListener("click", adicionarTarefa);
let botao = document.getElementById("botaoExcluir")
tarefaInput.addEventListener("keypress", function (e) {
    if(e.key === "Enter") {
        adicionarTarefa()
    }
})
function adicionarTarefa() {
    const tarefaTexto = tarefaInput.value;
    if (tarefaTexto.trim() !==""){
        const novaTarefa = document.createElement("li");
        novaTarefa.innerHTML = `${tarefaTexto}` + `<button id="botãoExcluir" class="excluir">Exlcuir</button>`

        listaTarefas.appendChild(novaTarefa);
        tarefaInput.value = "";
    }
}
listaTarefas.addEventListener("click", function (e){
    if(e.target.classList.contains("excluir")) {
        e.target.parentElement.remove()
    }
})

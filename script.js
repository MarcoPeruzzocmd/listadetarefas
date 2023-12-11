const tarefaInput = document.getElementById("Add-Task");
const adicionarBotão = document.getElementById("adicionar");
const listaTarefasPendentes = document.getElementById("tarefas-pendentes");
const listaTarefasFinalizadas = document.getElementById("tarefas-finalizadas");

adicionarBotão.addEventListener("click", adicionarTarefa);

tarefaInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        adicionarTarefa();
    }
});

function adicionarTarefa() {
    const tarefaTexto = tarefaInput.value;
    if (tarefaTexto.trim() !== "") {
        const novaTarefa = document.createElement("li");
        novaTarefa.innerHTML = `${tarefaTexto} <button class="excluir">Finalizado</button>`;
        novaTarefa.querySelector("button").addEventListener("click", function () {
            moverTarefa(novaTarefa, listaTarefasFinalizadas);
        });

        listaTarefasPendentes.appendChild(novaTarefa);
        tarefaInput.value = "";
    }
}

function moverTarefa(tarefa, novaLista) {
    const botaoExcluir = tarefa.querySelector(".excluir");
    botaoExcluir.remove(); // Remove o botão de excluir

    const botaoDesfazer = document.createElement("button");
    botaoDesfazer.textContent = "Excluir";
    botaoDesfazer.classList.add("desfazer");

    // Adiciona evento ao botão Desfazer para mover a tarefa de volta
    botaoDesfazer.addEventListener("click", function () {
        moverTarefa(tarefa, listaTarefasPendentes);
        botaoDesfazer.remove(); // Remove o botão Desfazer
    });

    tarefa.appendChild(botaoDesfazer);
    novaLista.appendChild(tarefa);
}

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("excluir")) {
        const tarefa = e.target.parentElement;
        moverTarefa(tarefa, listaTarefasFinalizadas);
    } else if (e.target.classList.contains("desfazer")) {
        const tarefa = e.target.parentElement;
        e.target.remove(); // Remove o botão Desfazer
        tarefa.remove();   // Remove a tarefa
    }
});

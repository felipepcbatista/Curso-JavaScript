// === Seletores ===
const numeroInput = document.querySelector("#numero");
const btn = document.querySelector("#gerar");
const lista = document.querySelector("#resultado");

// === Funções ===
function gerarTabuada() {
    const numero = parseInt(numeroInput.value);

    if (isNaN(numero)) {
        lista.innerHTML = "<li>Por favor, digite um número válido.</li>";
        return;
    }

    lista.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        const item = document.createElement("li");
        item.innerText = `${numero} x ${i} = ${numero * i}`;
        lista.appendChild(item);
    }
}

// === Eventos ===
btn.addEventListener("click", gerarTabuada);
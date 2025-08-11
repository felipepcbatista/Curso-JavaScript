// === Seletores ===
const input = document.querySelector("#nascimento");
const btn = document.querySelector("#verificar");
const saida = document.querySelector("#resultado");

// Define o max do input=date para hoje (evita datas futuras)
(function setMaxHoje() {
    const hoje = new Date();
    const yyyy = hoje.getFullYear();
    const mm = String(hoje.getMonth() + 1).padStart(2, "0");
    const dd = String(hoje.getDate()).padStart(2, "0");
    input.max = `${yyyy}-${mm}-${dd}`;
})();

// === Funções ===
function calcularIdade(isoDate) {
    const hoje = new Date();
    const nascimento = new Date(isoDate);

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate()))
        idade--;

    return idade;
}

function classificarIdade(idade) {
    if (idade < 18) return "Criança ou Adolescente";
    else if (idade < 60) return "Adulto";
    else return "Idoso";
}

function verificar() {
    const valor = input.value;

    if (!valor) {
        saida.textContent = "Data inválida. Confirme o valor informado.";
        return;
    }

    const idade = calcularIdade(valor);
    const texto = classificarIdade(idade);
    saida.textContent = `Você tem ${idade} ano(s) (${texto}).`;
}

// === Eventos ===
btn.addEventListener("click", verificar);
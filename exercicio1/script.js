// === Seletores ===
const pesoInput = document.querySelector("#peso");
const alturaInput = document.querySelector("#altura");
const btn = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

// === Funções ===
function calcularIMC() {
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.innerText = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 24.9) classificacao = "Peso normal";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else if (imc < 34.9) classificacao = "Obesidade grau I";
    else if (imc < 39.9) classificacao = "Obesidade grau II";
    else classificacao = "Obesidade grau III";

    resultado.innerText = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
}

// === Eventos ===
btn.addEventListener("click", calcularIMC);
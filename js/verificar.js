document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("verificarBtn").addEventListener("click", function() {

        let numero = document.getElementById("numero").value;
        let resultado = document.getElementById("resultado");

        if (numero === "") {
            resultado.innerHTML = "Por favor, insira um número.";
            return;
        }
        numero = parseInt(numero);

        if (isNaN(numero)) {
            resultado.innerHTML = "Por favor, insira um número válido.";
        } else if (numero % 2 === 0) {
            resultado.innerHTML = `O número ${numero} é <strong>Par</strong>.`;
        } else {
            resultado.innerHTML = `O número ${numero} é <strong>Ímpar</strong>.`;
        }
    });
});


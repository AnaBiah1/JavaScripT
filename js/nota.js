document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calcularBtn").addEventListener("click", function() {

        let nota1 = parseFloat(document.getElementById("nota1").value);
        let nota2 = parseFloat(document.getElementById("nota2").value);
        let nota3 = parseFloat(document.getElementById("nota3").value);
        let nota4 = parseFloat(document.getElementById("nota4").value);
        let resultado = document.getElementById("resultado");

        // Verifica se as notas são válidas
        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
            resultado.innerHTML = "Por favor, insira todas as notas corretamente.";
            return;
        }
        // Calcula a média
        let media = (nota1 + nota2 + nota3 + nota4) / 4;

        // Define o status do aluno
        if (media >= 7) {
            resultado.innerHTML = `Média: <strong>${media.toFixed(2)}</strong> - <span style="color: green;">Aprovado</span>`;

        } else {
            resultado.innerHTML = `Média: <strong>${media.toFixed(2)}</strong> - <span style="color: red;">Reprovado</span>`;
        }
    });
});
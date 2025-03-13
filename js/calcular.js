function calcularIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var resultado = document.getElementById("resultado");

    if (peso === "" || altura === "") {
        resultado.innerHTML = "Por favor, preencha os campos.";
        return;
    }
}
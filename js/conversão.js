function converter() {
    var celsius = document.getElementById("celsius").value;
    var resultado = document.getElementById("resultado");

    if (celsius === "") {
        resultado.innerHTML = "Digite um número!";
        return;
    }
    celsius = parseFloat(celsius);

    var fahrenheit = (celsius * 9/5) + 32;

    resultado.innerHTML = "Temperatura em Fahrenheit: " + fahrenheit;
}
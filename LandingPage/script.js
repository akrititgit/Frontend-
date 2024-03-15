document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("toFahrenheit").addEventListener("click", convertToFahrenheit);
    document.getElementById("toCelsius").addEventListener("click", convertToCelsius);
    document.getElementById("reset").addEventListener("click", reset);
});

function convertToFahrenheit() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsius)) {
        var fahrenheitResult = (celsius * 9/5) + 32;
        document.getElementById("fahrenheit").value = fahrenheitResult.toFixed(2);
    }
}

function convertToCelsius() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (!isNaN(fahrenheit)) {
        var celsiusResult = (fahrenheit - 32) * 5/9;
        document.getElementById("celsius").value = celsiusResult.toFixed(2);
    }
}

function reset() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
}

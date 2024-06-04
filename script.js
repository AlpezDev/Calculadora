//Marlon Aldana Pérez CC: 1082883887
var btnSuma = document.getElementById("btnSuma");
var btnResta = document.getElementById("btnResta");
var btnMultiplicar = document.getElementById("btnMultiplicar");
var btnDividir = document.getElementById("btnDividir");
var resultado = document.getElementById("txtResultado");

btnSuma.addEventListener("click", function () {
    realizarOperacion('suma');
});
btnResta.addEventListener("click", function () {
    realizarOperacion('resta');
});
btnMultiplicar.addEventListener("click", function () {
    realizarOperacion('multiplicacion');
});
btnDividir.addEventListener("click", function () {
    realizarOperacion('division');
});

function realizarOperacion(operacion) {
    var dato1 = document.getElementById("txtNumero1").value;
    var dato2 = document.getElementById("txtNumero2").value;

    var num1 = Number(dato1);
    var num2 = Number(dato2);
    var resultadoOperacion;

    if (operacion === 'suma') {
        resultadoOperacion = num1 + num2;
    } else if (operacion === 'resta') {
        resultadoOperacion = num1 - num2;
    } else if (operacion === 'multiplicacion') {
        resultadoOperacion = num1 * num2;
    } else if (operacion === 'division') {
        if (num2 !== 0) {
            resultadoOperacion = num1 / num2;
        } else {
            resultadoOperacion = 'Error: División por 0';
        }
    }

    resultado.value = resultadoOperacion;
    console.log(resultadoOperacion);
}
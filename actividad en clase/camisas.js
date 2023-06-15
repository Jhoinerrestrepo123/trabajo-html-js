
function verificarNumero() {
    let number = parseFloat(document.
        getElementById("numberInput").value)
    let resultadoElemento = document.
        getElementById("resultado")

    /*comenzamos con condicional*/
    if (number > 3) {
        resultadoElemento.textContent =
            "Pagar con tarjeta"
    }
    else if (number< 3) {
        resultadoElemento.textContent =
            "Pagar con efectivo"
    } 
}
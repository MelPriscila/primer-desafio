/*let precio = 100
let repetir = true

while (repetir) {
    let cantidad = parseInt(prompt("¡Bienvenido! Ingrese la cantidad de combos que desea, el precio es de $100 por cada uno"))

    alert(`Su pedido es igual a $${cantidad * precio}`)

    let confirmacion = prompt("Desea hacer otro pedido?").toLowerCase()

    if (confirmacion == "no" || confirmacion == "no quiero" || confirmacion == "no deseo") {
        repetir = false
        alert("!Gracias por su compra!")
    }
}
*/
let respuesta

do {
    const precio = 100

    function multiplicacion(numero1 = 1, precio) {
        return numero1 * precio
    }

    do {
        numero1 = parseInt(prompt("¡Bienvenido! Ingrese la cantidad de combos que desea, el precio es de $100 por cada uno"))

        if (isNaN(numero1)) {
            alert("Por favor ingrese un numero, no letras")
        } else {
            alert(`El valor de su pedido es igual a $${numero1 * precio}`)
        }

        let resultado = multiplicacion(numero1, precio)

    } while (isNaN(numero1))

    respuesta = prompt("Desea hacer otro pedido?").toLowerCase()

} while (respuesta != "no") {
    alert("¡Gracias por su compra!")
}
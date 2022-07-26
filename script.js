let precio = 100
let repetir = true

while (repetir) {
    let cantidad = parseInt(prompt("¡Bienvenido! Ingrese que cantidad de combos que desea, el precio es de $10 por cada uno"))

    alert(`Su pedido es igual a $${cantidad * precio}`)

    let confirmacion = prompt("Desea hacer otro pedido?").toLowerCase()

    if (confirmacion == "no" || confirmacion == "no quiero" || confirmacion == "no deseo") {
        repetir = false
        alert("!Gracias por su compra!")
    }
}
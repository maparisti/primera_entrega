/* debugger */

let dolar = 1.02
let euro = 0.98
let bienvenida = confirm("Estás listo para convertir tu dinero? Da click en aceptar para continuar")
const conversiones = ['usd a eur', 'eur a usd'];

function nuevaConversion(){
    let nuevaCon = prompt("Ingresa la conversion a sugerir, por favor. ejemplo: cop a chf")
    let resultado = conversiones.includes(nuevaCon)
    if (!resultado) {
        conversiones.push(nuevaCon)
        console.log("Gracias!", nuevaCon, "ha sido añadida cómo sugerencia")
    }
}

class conversion {
    constructor(divisa1, divisa2, valorConvertir){
        this.divisa1 = divisa1
        this.divisa2 = divisa2
        this.valorConvertir = valorConvertir
    }
    convertir() {
        if ((this.divisa1.toLowerCase() == "usd") && (this.divisa2.toLowerCase() == "eur")) {
                let resultado = this.valorConvertir * euro
                console.log(this.valorConvertir, "dolares", "equivalen a", resultado, "euros")
            }
        else if ((this.divisa1.toLowerCase() == "eur") && (this.divisa2.toLowerCase() == "usd")) {
                let resultado = this.valorConvertir * dolar
                console.log(this.valorConvertir, "euros", "equivalen a", resultado, "dolares")
        }    
        else {
            console.warn("No tenemos disponible esa conversion, pero puedes ingresar tu sugerencia a continuación")
            nuevaConversion()
        }
    }
}

function horaConversion() {
    const divisa1 = prompt("Escribe el codigo de la moneda a convertir")
    const divisa2 = prompt("Escribe el codigo de la moneda de destino")
    const valorConvertir = parseFloat(prompt("Escribe el valor a convertir"))
    const conversor = new conversion(divisa1, divisa2, valorConvertir)
          conversor.convertir()
}

horaConversion()
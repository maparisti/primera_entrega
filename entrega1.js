let dolar = 1.02
let euro = 0.98
const conversiones = ['usd a eur', 'eur a usd'];
const despedida = ['Gracias por usar el Convertor de divisas', 'Buenos días fue un gusto verte el día de hoy', 'Hola, espero que hoy tengas un gran día', 'Buen día y vuelve pronto!'];
let mensajeRandom = Math.floor(Math.random() * despedida.length);
let mensajeEscogido = despedida[mensajeRandom]
let sugerencia = document.getElementById("sugerencia")
let verResultado = document.getElementById("verResultado")
let field = document.querySelectorAll("input")
let resultadoC = document.getElementById("resultadoC")



function nuevaConversion(){
    let nuevaCon = document.getElementById("sugerir").value
    let resultado = conversiones.includes(nuevaCon)
    if (!resultado) {
        conversiones.push(nuevaCon)
        localStorage.setItem("conversiones", JSON.stringify(conversiones))
        alert("Gracias!" + " " + nuevaCon + " " + "ha sido añadida cómo sugerencia")
    }
}

function despedir() {
    const cajaDespedida = document.getElementById("cajaDespedida")
    const h2 = document.createElement("h2")
          h2.innerText = mensajeEscogido
          cajaDespedida.append(h2)    
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
                      resultadoC.innerText = this.valorConvertir + " " + "dolares" + " " + "equivalen a" + " " + resultado + " " + "euros"
            }
        else if ((this.divisa1.toLowerCase() == "eur") && (this.divisa2.toLowerCase() == "usd")) {
                let resultado = this.valorConvertir * dolar
                      resultadoC.innerText = this.valorConvertir + " " + "dolares" + " " + "equivalen a" + " " + resultado + " " + "dolares"
        }    
        else {
            alert("No tenemos disponible esa conversion, pero puedes ingresar tu sugerencia a continuación")
            nuevaConversion()
        }
    }
}

function horaConversion() {
    const divisa1 = document.getElementById("selectDivisa1").value
    const divisa2 = document.getElementById("selectDivisa2").value
    const valorConvertir = document.getElementById("valorConvertir").value
    const conversor = new conversion(divisa1, divisa2, valorConvertir)
          conversor.convertir()
          despedir()
}

sugerencia.addEventListener("click", nuevaConversion)
verResultado.addEventListener("click", horaConversion)


function controlarFocus() {
    field.forEach(f => {
        f.addEventListener("focus", ()=> {
            f.className = "fondo-azul"
        })
        f.addEventListener("blur", ()=> {
            f.className = ""
        })
    })
}

controlarFocus()





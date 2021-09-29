let turno = 10

function turnos (){
    personas = Number(prompt("Cuantos turnos hay ingresados?"))

    return turno*personas
}

console.log("Usted tiene " + turnos() + " minutos de espera")

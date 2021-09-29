function validar(numero){
    let numeroTrabajado = numero % 2

    if(numeroTrabajado == 0){
        console.log("Su numero es multiplo de 2")
    }else{
        console.log("Su numero no es multiplo de 2")
    }

}

function numero(){
    let numero = Number(prompt("Ingrese un multiplo de 2"))
    validar(numero)
}


function mostrar (){
    console.log(numero())
}

mostrar()

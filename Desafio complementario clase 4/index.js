
function numero(){
    let numero = Number(prompt("Ingrese un multiplo de 2"))
    validar(numero)
}
function validar(numero){
    let numeroTrabajado = numero % 2

    if(numeroTrabajado == 0){
        console.log("Su numero es multiplo de 2")
        mostrar(numero);
    }else{
        console.log("Su numero no es multiplo de 2")
        mostrar(numero)
    }

}

function mostrar (numero){
    console.log(numero)
}

numero();

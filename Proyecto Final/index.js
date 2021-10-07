let comprar
let cantidad
let producto;
let intentar;
let comenzar;


class Productos {

    constructor(nombre, precio, stock){
        this.nombre = nombre,
        this.precio = precio,
        this.stock = stock
    }

    comprar(cantidad = Number(prompt("Ingrese la cantidad a comprar"))){
        if(cantidad < this.stock){
            alert(`Acabas de comprar ${cantidad} de ${this.nombre}, te sale ${cantidad * this.precio}`)
            this.stock -= cantidad
            console.log(this.stock)
        }else{
            alert("No tenemos stock suficiente")
        }
    }
}

function busqueda (){
    let compra = prompt("¿Que desea comprar?")
    if(compra == "botines"){
        producto = new Productos ("Botines", 200, 50)
        producto.comprar()
    }else if (compra == "remeras"){
        producto = new Productos ("Remeras", 500, 30)
        producto.comprar()
    }else if (compra == "pelotas"){
        producto = new Productos ("Pelota", 900, 35)
        producto.comprar()
    }else{
        alert("El producto no existe, intenta de nuevo")
        intentar = confirm("Reintentar?")
        if (intentar == true){
            busqueda()
        }else{
            alert("Gracias, vuelva pronto")
            comenzar = false
        }
    }
}
while(comenzar != false){
    comenzar = confirm("Desea comprar?")
    if (comenzar == true){
        busqueda()
    }else{
        alert("Gracias vuelva pronto")
}
}


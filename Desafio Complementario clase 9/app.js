class Productos{
    constructor( marca, nombre, precio){
        this.marca = marca
        this.nombre = nombre
        this.precio = precio
    }
}

let listaProductos;

function agregar (){

    let marca = document.getElementById("marca").value
    let nombre =document.getElementById("nombre").value
    let precio =document.getElementById("precio").value

    const producto = new Productos (marca, nombre, precio)

    if(localStorage.getItem("Productos") == null){
        listaProductos = []
        listaProductos.push(producto)
        localStorage.setItem("Productos", JSON.stringify(listaProductos))
        return producto
    }else{
        listaProductos = JSON.parse(localStorage.getItem("Productos"))
        listaProductos.push(producto)
        localStorage.setItem("Productos", JSON.stringify(listaProductos))
        return producto
    }

}

document.getElementById("boton").addEventListener("click", function(event){
    event.preventDefault()

    agregar()
});

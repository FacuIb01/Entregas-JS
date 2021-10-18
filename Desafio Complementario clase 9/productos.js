
let listaObjetos;

let imprimirDatos = document.getElementById("productos")


if(localStorage.getItem("Productos") == null){
    alert("No tenes nada para mostrar")
}else{
    listaObjetos = JSON.parse(localStorage.getItem("Productos"))
    listaObjetos.forEach(element => {
        productos.innerHTML += `
        <div>
        <h1>${element.marca}</h1>
        <h2>${element.nombre}</h2>
        <h3>${element.precio}</h3>
        </div>
        
        `
    });
}
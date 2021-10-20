let dataUsuario = document.querySelector("#tareaParaAgregar")

let añadir = document.querySelector("#adicion")

let divToDo = document.querySelector("#toDoList")





let listaTareas;

dataUsuario.onkeyup = () => {

    let dataTrabajada = dataUsuario.value

    if(dataTrabajada.trim() != 0){
        añadir.classList.add("activo")
    }else{
        añadir.classList.remove("activo")
    }
}

añadir.addEventListener("click", () => {
    let dataTrabajada = dataUsuario.value

    let traerInfo = localStorage.getItem("lista")   

    if(traerInfo == null){
        let listaTareas = []
        listaTareas.push(dataTrabajada)
        localStorage.setItem("lista", JSON.stringify(listaTareas))
    }else {
        listaTareas = JSON.parse(traerInfo)
        listaTareas.push(dataTrabajada)
        localStorage.setItem("lista", JSON.stringify(listaTareas))
    }
    mostrarTareas()
})


function mostrarTareas (){
    let traerInfo = localStorage.getItem("lista")

        listaTareas = JSON.parse(traerInfo);

    let newDiv = ""

    listaTareas.forEach((element, index) => {
        newDiv += `<div class="itemToDo">
        <div class="texto"><p>${element}</p></div>  
            <button class="borrar" id="borrarItem" onclick="borrarTarea(${index})"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Trash</title><path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352"/><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg></button>
        </div>
        `
    })

    divToDo.innerHTML = newDiv
    
    dataUsuario.value = ""
}


function borrarTarea (index){
    let traerInfo = localStorage.getItem("lista")

    listaTareas = JSON.parse(traerInfo)

    listaTareas.splice(index, 1)

    localStorage.setItem("lista", JSON.stringify(listaTareas))
    
    mostrarTareas()
}
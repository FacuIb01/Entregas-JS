
class tareasNuevas {
    constructor ( nombre){
        this.date = Date.now() 
        this.nombre = nombre
    }
}



let tareaAgregada = document.getElementById("tareaParaAgregar")
let imprimirDatos = document.getElementById("toDoList")
let tareas = []




const agregar = () => {
    let tareaAgregada = document.getElementById("tareaParaAgregar").value

    if(tareaAgregada == ""){
        alert("Agregue una tarea")
        return ""
    }else{

    
        imprimirDatos.innerHTML +=        
        ` <div class="itemToDo">
        <div class="texto"><p>${tareaAgregada}</p></div>  
            <button class="borrar" id="borrarItem"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Trash</title><path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352"/><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg></button>
    </div>
    `

    tareaAgregada = new tareasNuevas (tareaAgregada)
    tareas.push(tareaAgregada);
    
    }

}
    





document.getElementById("agregar").addEventListener("click",agregar)


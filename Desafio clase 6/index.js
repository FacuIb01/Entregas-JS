class Personas {

    constructor(nombre, apellido, edad, sexo){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.sexo = sexo
    }
    MayoresDe25(){
        if (this.edad > 25){
            console.log(`esta persona tiene ${this.edad} por lo tanto es mayor de 25`)
        }else if (this.edad == 25){
            console.log(`esta persona tiene ${this.edad} justos, que capo`)
        }else{
            console.log("Esta persona no tiene más de 25 años")
        }
    }

}

let listaPersonas = [];


function crearPersona(){
    nombre = prompt("Ingrese un nombre")
    apellido = prompt("ingrese un apellido")
    edad = Number(prompt("Ingrese una edad"))
    sexo = prompt("Ingrese su sexo")

    listaPersonas.push(añadir(nombre, apellido, edad, sexo))
    return `Persona creada`
}


function añadir (nombre, apellido, edad, sexo){
    const persona = new Personas (nombre, apellido, edad, sexo)
    return persona
}

function ordenarLista(){
    listaPersonas.sort((a,b) => {
        
            if(a.edad > b.nombre){
                return 1
            }else if(a.edad < b.edad){
                return -1
            }
        }
    )
}

//listaPersonas[0].MayoresDe25()

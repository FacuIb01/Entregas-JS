class palabra {
    constructor(palabra){
        this.letras = palabra
    }

    largo (){
        if(this.letras.length < 5){
            console.log(`su palabra tiene menos de 5 letras`)
        }else if (this.letras.length == 5 ){
            console.log ("su palabra tiene exactamente 5 letras")
        }else {
            console.log(`su palabra tiene más de 5 letras`)
        }
    }
}

let palabra1 = new palabra (prompt("ingrese una palabra"))

palabra1.largo()


class clima {
    constructor(lluvia){
        this.lluvias = lluvia
    }
    paraguas(){
        if (this.lluvias == "si"){
            alert("vas a tener que llevar un paraguas manito")
        }else if (this.lluvias == "no"){
            alert("Disfruta el dia")
        }else {
            alert("No te hagas el piola y responde")
        }
    }
}

let paragua = new clima (prompt("Esta lloviendo?"))

paragua.paraguas()


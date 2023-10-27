const musics = ["NLE Choppa - Final Warning", "Wejdene - Anissa", "Luv Resval - Wallachia", "Freeze Corleone - Shavkat", "Gunna - back at it"]

class Passenger {
    constructor() {
        this.name = "Rastapopoulos"
        this.mentalhealth = 10
    }
}
let feuxrouges = 30
let taxis = 1
const passenger = new Passenger()

while(feuxrouges > 0 && passenger.mentalhealth > 0) {
    feuxrouges -= 1
    const random = Math.floor(Math.random() * musics.length)
    console.log("Lecture de " + musics[random])
    console.log("Nombre de feux rouges restants: " + feuxrouges)
    
    if(musics[random] === "Wejdene - Anissa") {
        passenger.mentalhealth -= 1
        taxis +=1
        console.log(passenger.name + " a changé de taxi")
        console.log("Santé mentale de " + passenger.name + ": " + passenger.mentalhealth)
    }
    if(passenger.mentalhealth === 0) {
        console.log("Explosion")
    }
}
if(feuxrouges === 0 && passenger.mentalhealth > 0) {
    console.log(passenger.name + " est arrivé à destination et a changé " + (taxis - 1) + " fois de taxi")
}


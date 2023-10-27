// Tableau des prénoms
const names = ["Mia", "Brandon", "Kyle", "Billy", "Sam", "Gunter", "Peter", "Mason", "Brad"];

// Tableau des caractéristiques
const caractéristiques = ["nerd", "blonde", "sportif", "flippette", "beau gosse", "le scientifique"];

class Survivor {
    constructor() {
        let availableNames = [...names];
        this.name = availableNames.splice(Math.floor(Math.random() * availableNames.length), 1)[0];
        this.caractéristiques = [caractéristiques[Math.floor(Math.random() * caractéristiques.length)]];
        this.deathproba = 0.3;
        this.attackproba = 0.5;
        this.fatality = 0.2;
        this.hp = 1
    }
}

class Jason {
    constructor() {
        this.name = "Jason";
        this.hp = 100;
    }

    JasonAttack(survivor) {
        const random = Math.random();

        if (random < survivor.deathproba) {
            survivor.hp -=1
            console.log("Jason attaque " + survivor.name + " et " + survivor.name + " meurt ");
        
        } else if (survivor.deathproba < random && random < survivor.deathproba + survivor.attackproba) {
            this.hp -= 10;
            console.log(survivor.name + " a esquivé l'attaque et inflige 10 de dégâts à Jason ");

        } else if(survivor.deathproba + survivor.attackproba < random && random < 1) { // Le survivant meurt mais inflige 15 dégâts à Jason
            this.hp -= 15;
            survivor.hp -= 1
            console.log(survivor.name + " a infligé 15 de dégâts à Jason mais meurt en faisant cela ");
        }
        console.log("Points de vie de Jason: " + this.hp);
    }
}


// Création du tueur Jason
const JasonPV = new Jason();

// Création des survivants
const survivors = [];
for (let i = 0; i < 5; i++) {
    survivors.push(new Survivor());
}

const deadSurvivors = []

while (JasonPV.hp > 0 && survivors.length > 0) {
    const randomSurvivorIndex = Math.floor(Math.random() * survivors.length);
    const randomSurvivor = survivors[randomSurvivorIndex];
    JasonPV.JasonAttack(randomSurvivor);
    // Supprimer le survivant mort de la liste
    if (randomSurvivor.hp == 0) {
        deadSurvivors.push(randomSurvivor);
    survivors.splice(randomSurvivorIndex, 1);
    }
}

// Afficher les survivants morts
console.log("Survivants morts :");
for (const survivor of deadSurvivors) {
    console.log("RIP à " + survivor.name + " (" + survivor.caractéristiques +")");
}

// Afficher le résultat final
if (JasonPV.hp <= 0) {
    console.log("Les survivants ont gagné, Jason est mort !");
} else {
    console.log("Jason a tué tout le monde !");
}

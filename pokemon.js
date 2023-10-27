class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack; 
        this.defense = defense; 
        this.hp = hp; 
        this.luck = luck;
    }
    isLucky() {
        return Math.random() <= this.luck 
    }

    attackPokemon(defenseur) { 
        if (this.isLucky()) {
          const damage = this.attack - defenseur.defense;
          if (damage < 0) {
            console.log("C'est inefficace")
          }
          else {
            defenseur.receiveDamage(damage)
            console.log(this.name + " attaque et " + defenseur.name + " reçoit " + damage + " de dégâts, il lui reste " + defenseur.hp + " PV ")
            
          }
        }
        else { 
            console.log(this.name + " attaque mais rate ")
        }
    }

    receiveDamage(damage) {
        this.hp -= damage   
    }   
}
let Dracaufeu = new Pokemon ("Dracaufeu", 200, 100, 750, 0.6);
let Yveltal = new Pokemon ("Yveltal", 150, 150, 700, 0.7)

while (Dracaufeu.hp > 0 && Yveltal.hp > 0) {
    
    Dracaufeu.attackPokemon(Yveltal) 
        if (Yveltal.hp <=0) {
            console.log(Yveltal.name + " est KO, " + Dracaufeu.name + " a remporté le combat")
        break
        }   
    
    Yveltal.attackPokemon(Dracaufeu) 
        if(Dracaufeu.hp <=0) {
            console.log(Dracaufeu.name + " est KO, " + Yveltal.name + " a remporté le combat" )
        break
        }
        
}

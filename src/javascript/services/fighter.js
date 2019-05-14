
export class Fighter {
    constructor( { name, health, attack, defense } ) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
    }
    
    /**
     * який би розраховував силу удару (кількість завданої шкоди здоров'ю противника)
     * за формулою power = attack * criticalHitChance;
     * , де criticalHitChance — рандомне число від 1 до 2,
     */
    getHitPower() {

    }

    /**
     * який би розраховував силу блоку (амортизація удару противника) 
     * за формулою power = defense * dodgeChance;, де dodgeChance — рандомне число від 1 до 2
     */
    getBlockPower() {

    }
}
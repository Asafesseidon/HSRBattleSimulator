class BasicAttack{

    private name:string;
    private multiplier:number;
    private spGain:number;
    private reach: string;

    constructor(name:string, multiplier:number, spGain:number, reach:string) {

        this.name = name;
        this.multiplier = multiplier;
        this.spGain = spGain;
        this.reach = reach;
    }
    public getBasicAttackName():string{
        return this.name;
    }
    public getBasicAttackMultiplier():number{
        return this.multiplier;
    }
    public getBasicAttackSpGain():number{
        return this.spGain;
    }
    public getBasicAttackReach():string{
        return this.reach;
    }
}

class Skill{

    private name:string;
    private type:string;//Either an ATK or a Buff
    private multiplier:number;
    private spUsage:number;
    private reach:string;

    constructor(name:string, type:string, multiplier:number, spUsage:number, reach:string) {

        this.name = name;
        this.type = type;
        this.multiplier = multiplier;
        this.spUsage = spUsage;
        this.reach = reach;
    }
    public getSkillName():string{
        return this.name;
    }
    public getSkillType():string{
        return this.type;
    }
    public getSkillMultiplier():number{
        return this.multiplier;
    }
    public getSkillSpUsage():number{
        return this.spUsage;
    }
    public getSkillReach():string{
        return this.reach;
    }
}

class FuA{

    private name:string;
    private type: string;
    private condition: string;
    private multiplier: number;
}

class Ultimate{

    private name:string;
    private energy:number;
    private type:string;
    private multiplier:number;
    private actual_energy:number;
    private reach:string;
    constructor(name:string,energy:number, type:string, multiplier:number,actual_energy:number=0, reach:string){
        
        this.name = name;
        this.energy=energy;
        this.type = type;
        this.multiplier=multiplier;
        this.actual_energy = actual_energy;
        this.reach = reach;
    }
    public getUltName():string{
        return this.name;
    }
    public putenergy(value:number){
        this.actual_energy+=value;
    }
    public TakeAtualEnergy(){
        return this.actual_energy
    }
    public TakeEnergy(){
        return this.energy
    }
    public getUltType():string{
        return this.type;
    }
    public getUltMultiplier():number{
        return this.multiplier;
    }
    public getUltReach():string{
        return this.reach;
    }
    

}
class LightCone{
    private id: string;
    private name:string;
    private life:number;
    private attack:number;
    private defense: number;
    
    constructor(id:string, name:string, life:number=0, attack:number=0, defense:number=0){
        this.id = id;
        this.name = name;
        this.attack=attack;
        this.defense=defense;
        this.life=life;
    }
    public getLcId():string{
        return this.id;
    }
    public getLcName():string{
        return this.name;
    }
    public getLcAttack():number{
        return this.attack;
    }
    public getLcDefense():number{
        return this.defense;
    }
    public getLcLife():number{
        return this.life;
    }
}
class Personagem{
    private id:string
    private life:number;
    private attack:number;
    private defense: number;
    private speed: number;
    private weapon:LightCone;
    private basicAttack: BasicAttack;
    private skill:Skill;
    private ultimate: Ultimate;
    constructor(life:number,weapon:LightCone, basicAttack: BasicAttack, skill:Skill, attack:number, defense: number, speed:number,id:string, ultimate: Ultimate){
        this.id=id
        this.life=life;
        this.weapon=weapon;
        this.basicAttack = basicAttack;
        this.skill = skill;
        this.attack=attack;
        this.defense=defense;
        this.speed=speed;
        this.ultimate = ultimate;
    }
    public getCharId():string{
        return this.id;
    }
    public setlife(value:number){
        this.life+=value;
    }
    public getBaseLife():number{
        return this.life;
    }
    public getBaseAttack():number{
        return this.attack;
    }
    public getBaseDefense():number{
        return this.defense;
    }
    public getBaseSpeed():number{
        return this.speed;
    }
    public getBasicAttack(){
        return this.basicAttack;
    }
    public getSkill(){
        return this.skill;
    }
    public getUltimate(){
        return this.ultimate;
    }
    public getLc(){
        return this.weapon;
    }
    
}


class Enemy extends Personagem{

    toughness:number

    constructor(toughness:number, life:number,weapon:LightCone, basicAttack:BasicAttack, skill:Skill, attack:number, defense: number, speed:number,id:string, ultimate:Ultimate){
        super(life,weapon,basicAttack, skill, attack, defense, speed, id, ultimate);

        this.toughness=toughness;
    }
}
function chars(id, iteration){

    if (iteration >= 4){

        iteration = 4;
    } 

    if (id == 0) {

        var ally = [];
        iteration++;

        alert(ally);

        return ally;
    }

    else if (id == 1) {

        var ally = [new Personagem(2600,new LightCone('a','ab', 800,500,450),
        new BasicAttack('a', 50, 1, 'Single Target'),
        new Skill('a', 'buff', 200, 2, 'Blast' ), 1000,800,100,'hpAlly' + iteration,
        new Ultimate('e',110, 'buff', 500, 0, 'AoE'))]; //Huohuo
        iteration++;

        alert(ally);

        return ally;
    }

    else if (id == 2) {

        var ally = [new Personagem(2600,new LightCone('b','bc',800,500,450),
        new BasicAttack('a', 50, 1, 'Single Target'), 
        new Skill('a', 'attack', 200, 2, 'Blast'),1000,800,100,'hpAlly' + iteration, 
        new Ultimate('q', 120, 'attack', 470, 0, 'AoE'))]; //Kafka
        iteration++;

        alert(ally);

        return ally;
    }

    else if (id == 3) {

        var ally= [new Personagem(2600,new LightCone('c','cd',800,500,450),
        new BasicAttack('attack', 50, 1, 'Single Target'), 
        new Skill('a', 'attack', 200, 2, 'Blast' ), 1000,800,100,'hpAlly' + iteration,  
        new Ultimate('q', 120, 'attack', 470, 0, 'AoE'))]; //Black Swan
        iteration++;

        alert(ally);

        return ally;
    }

    else if (id == 4) {

        var ally= [new Personagem(2600,new LightCone('d','de',800,500,450),
        new BasicAttack('a', 50, 1, 'Single Target'), 
        new Skill('a', 'buff', 200, 2, 'AoE'), 1000,800,100,'hpAlly' + iteration,  
        new Ultimate('q', 120, 'buff', 470, 0, 'AoE'))]; //Ruan Mei
        iteration++;

        alert(ally);

        return ally;
    }

    else if (id == 5) {

        var ally= [ new Personagem(2600,new LightCone('e','ef',800,500,450),
        new BasicAttack('a', 50, 1, 'Single Target'), 
        new Skill('a', 'buff', 200, 2, 'AoE'), 1000,800,100,'hpAlly' + iteration,  
        new Ultimate('q', 120, 'attack', 470, 0, 'Single Target'))]; //Aventurine
        iteration++;

        alert(ally);

        return ally;        
    }

    else if (id == 6) {

        var ally = [new Personagem(2600,new LightCone('f','fg',800,500,450),
        new BasicAttack('a', 50, 1, 'Single Target'), 
        new Skill('a', 'attack', 200, 2, 'Single Target'), 1000,800,100,'hpAlly' + iteration,  
        new Ultimate('q', 120, 'attack', 470, 0, 'Single Target'))]; //Yanqing
        iteration++;

        alert(ally);

        return ally;
    }

    
    return iteration;

}


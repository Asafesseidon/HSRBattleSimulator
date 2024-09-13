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
    private effect:string;
    private effectMultiplier:number;

    constructor(name:string, type:string, multiplier:number, spUsage:number, reach:string, effect:string, effectMultiplier:number) {

        this.name = name;
        this.type = type;
        this.multiplier = multiplier;
        this.spUsage = spUsage;
        this.reach = reach;
        this.effect = effect;
        this.effectMultiplier = effectMultiplier;
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
    public getSkillEffect():string{
        return this.effect;
    }
    public getSkillEffectMultiplier():number{
        return this.effectMultiplier;
    }
}

class Talent{

    private name:string;
    private type:string;
    private effect:string;
    private reach:string;
    private buffOrDebuffmultiplier:number;

    constructor(name:string, type:string, effect:string, reach:string, buffOrDebuffmultiplier:number){
        this.name = name;
        this.type = type;
        this.effect = effect;
        this.reach = reach;
        this.buffOrDebuffmultiplier = buffOrDebuffmultiplier;
    }
    public getTalentName():string{
        return this.name;
    }
    public getTalentType():string{
        return this.type;
    }
    public getTalentMultiplier():number{
        return this.buffOrDebuffmultiplier;
    }
    public getTalentReach():string{
        return this.reach;
    }
    public getTalentEffect():string{
        return this.effect;
    }
}

class FuA{

    private name:string;
    private type: string;
    private condition: string;
    private multiplier: number;
    private reach:string;
    constructor(name:string, type:string, condition:string, reach:string, multiplier:number){
        this.name = name;
        this.type = type;
        this.condition = condition;
        this.reach = reach;
        this.multiplier = multiplier;
    }
    public getFuAName():string{
        return this.name;
    }
    public getFuAType():string{
        return this.type;
    }
    public getFuAMultiplier():number{
        return this.multiplier;
    }
    public getFuAReach():string{
        return this.reach;
    }
    public getFuACondition():string{
        return this.condition;
    }
}

class Ultimate{

    private name:string;
    private energy:number;
    private type:string;
    private multiplier:number;
    private actual_energy:number;
    private reach:string;
    private effect:string;
    private effectMultiplier:number;
    constructor(name:string,energy:number, type:string, multiplier:number,actual_energy:number=0, reach:string, effect:string, effectMultiplier:number){
        
        this.name = name;
        this.energy=energy;
        this.type = type;
        this.multiplier=multiplier;
        this.actual_energy = actual_energy;
        this.reach = reach;
        this.effect = effect;
        this.effectMultiplier = effectMultiplier;
    }
    public getUltName():string{
        return this.name;
    }
    public putenergy(value:number){
        this.actual_energy+=value;
    }
    public TakeAtualEnergy(){
        return this.actual_energy;
    }
    public TakeEnergy(){
        return this.energy;
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
    public getUltEffect():string{
        return this.effect;
    }
    public getUltEffectMultiplier():number{
        return this.effectMultiplier;
    }
    

}
class LightCone{
    private id: string;
    private name:string;
    private life:number;
    private attack:number;
    private defense: number;
    private effect:string;
    private description:string;
    
    constructor(id:string, name:string, life:number=0, attack:number=0, defense:number=0, effect:string = 'null', description:string){
        this.id = id;
        this.name = name;
        this.attack=attack;
        this.defense=defense;
        this.life=life;
        this.effect=effect;
        this.description=description;
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
    public getLcEffect():string{
        return this.effect;
    }
    public getLcDescription():string{
        return this.description;
    }
}
class Personagem{
    private id:string
    private life:number;
    private attack:number;
    private defense: number;
    private speed: number;
    private basicAttack: BasicAttack;
    private skill:Skill;
    private ultimate: Ultimate;
    private talent: Talent;
    constructor(life:number, basicAttack: BasicAttack, skill:Skill, attack:number, defense: number, 
        speed:number,id:string, ultimate: Ultimate, talent:Talent){
        this.id=id
        this.life=life;
        this.basicAttack = basicAttack;
        this.skill = skill;
        this.attack=attack;
        this.defense=defense;
        this.speed=speed;
        this.ultimate = ultimate;
        this.talent= talent;
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
    public getTalent(){
        return this.talent;
    }
}
class Ally extends Personagem{

    weapon:LightCone

    constructor(life:number,weapon: LightCone, basicAttack:BasicAttack, skill:Skill, attack:number, defense: number, speed:number,id:string, ultimate:Ultimate, talent:Talent){
        super(life,basicAttack, skill, attack, defense, speed, id, ultimate, talent);

        this.weapon=weapon;
    }
}

class Enemy extends Personagem{

    toughness:number

    constructor(toughness:number, life:number, basicAttack:BasicAttack, skill:Skill, attack:number, defense: number, speed:number,id:string, ultimate:Ultimate, talent:Talent){
        super(life,basicAttack, skill, attack, defense, speed, id, ultimate, talent);

        this.toughness=toughness;
    }
}
function chars(id:number, iteration:number):Personagem[] | number{

    if (iteration >= 4){

        iteration = 4;
    } 

    var ally: Personagem[] =[];
    if (id == 0) {

        iteration++;


        return ally;
    }

    else if (id == 1) {

        ally = [new Ally(2600,new LightCone('a','ab', 800,500,450, 'a', 'ab'),
        new BasicAttack('a', 50, 1, 'Single Target'),
        new Skill('a', 'buff', 200, 2, 'Blast', 'Heals allies and Cleanses main Target', 60), 1000,800,100,'hpAlly' + iteration,
        new Ultimate('e',110, 'buff', 500, 0, 'AoE', 'Increases energy and ATK', 10), new Talent('a', 'buff', 'Heal','Single Target', 10))]; //Huohuo
        iteration++;


        return ally;
    }

    else if (id == 2) {

        ally = [new Ally (2600,new LightCone('b','bc',800,500,450, 'b', 'bc'),
        new BasicAttack('a', 50, 1, 'Single Target'), 
        new Skill('a', 'attack', 200, 2, 'Blast', "Trigger all DoT's currently on the main target", 75),1000,800,100,'hpAlly' + iteration, 
        new Ultimate('q', 120, 'attack', 470, 0, 'AoE', "Apply Shock to all targets and Trigger all DoT's currently on them", 75), new Talent('a', 'attack', 'FuA+Debuff','Single Target', 10))]; //Kafka
        iteration++;


        return ally;
    }

    else if (id == 3) {

        ally= [new Ally(2600,new LightCone('c','cd',800,500,450, 'c', 'cd'),
        new BasicAttack('attack', 50, 1, 'Single Target'), 
        new Skill('a', 'attack', 200, 2, 'Blast', 'Apply 2 stacks of Arcana to the main target and shreds their Def, 1 for the adjacent ones', 10 ), 1000,800,100,'hpAlly' + iteration,  
        new Ultimate('q', 120, 'attack', 470, 0, 'AoE', 'Applies Epiphany and Treats Arcana as Bleed, Burn, Wind Shear and Shock', 10), new Talent('a', 'buff', 'a','Single Target', 10))]; //Black Swan
        iteration++;


        return ally;
    }

    else if (id == 4) {

        ally= [new Ally(2600,new LightCone('d','de',800,500,450, 'd', 'de'),
        new BasicAttack('a', 50, 1, 'Single Target'), 
        new Skill('a', 'buff', 200, 2, 'AoE', 'Applies Ruan Mei Buff, +50% Weakness Break Efficiency', 35), 1000,800,100,'hpAlly' + iteration,  
        new Ultimate('q', 120, 'buff', 470, 0, 'AoE', 'Applies RESPEN', 25), new Talent('a', 'buff', 'Speed Buff+ Extra Break Dmg','AoE', 10))]; //Ruan Mei
        iteration++;


        return ally;
    }

    else if (id == 5) {

        ally= [ new Ally(2600,new LightCone('e','ef',800,500,450, 'e', 'ef'),
        new BasicAttack('a', 50, 1, 'Single Target'), 
        new Skill('a', 'buff', 200, 2, 'AoE', 'Apllies Shield to all Allies and Blind Bet', 60), 1000,800,100,'hpAlly' + iteration,  
        new Ultimate('q', 120, 'attack', 470, 0, 'Single Target', 'Applies Crit DMG Vulnerabity to Target and gain stacks for FuA', 10), new Talent('a', 'buff', 'a','Single Target', 10))]; //Aventurine
        iteration++;


        return ally;        
    }

    else if (id == 6) {

        ally = [new Ally(2600,new LightCone('f','fg',800,500,450, 'f', ' fg'),
        new BasicAttack('a', 50, 1, 'Single Target'), 
        new Skill('a', 'attack', 200, 2, 'Single Target', 'Chance to Trigger FuA', 60), 1000,800,100,'hpAlly' + iteration,  
        new Ultimate('q', 120, 'attack', 470, 0, 'Single Target', 'Buffs Crit Rate and enters Soulsteel state', 50), new Talent('a', 'buff', 'a','Single Target', 10))]; //Yanqing
        iteration++;


        return ally;
    }

    
    return iteration;

}


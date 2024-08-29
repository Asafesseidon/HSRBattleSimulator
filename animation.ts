class BasicAttack{

    private name:string;
    private multiplier:number;
    private spGain:number;

    constructor(name:string, multiplier:number, spGain:number) {

        this.name = name;
        this.multiplier = multiplier;
        this.spGain = spGain;
    }
}

class Skill{

    private name:string;
    private type:string;//Either an ATK or a Buff
    private multiplier:number;
    private spUsage:number;

    constructor(name:string, type:string, multiplier:number, spUsage:number) {

        this.name = name;
        this.type = type;
        this.multiplier = multiplier;
        this.spUsage = spUsage;
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
    constructor(name:string,energy:number, type:string, multiplier:number){
        
        this.name = name;
        this.energy=energy;
        this.type = type;
        this.multiplier=multiplier;
        this.actual_energy = 0;
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

}
class LightCone{
    private vida:number;
    private attack:number;
    private defense: number;
    
    constructor( life:number=0, attack:number=0, defense:number=0){
        this.attack=attack;
        this.defense=defense;
        this.vida=life;
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
    constructor(life:number,weapon:LightCone, basicAttack: BasicAttack, skill:Skill, attack:number, defense: number, speed:number,id:string){
        this.id=id
        this.life=life;
        this.weapon=weapon;
        this.basicAttack = basicAttack;
        this.skill = skill;
        this.attack=attack;
        this.defense=defense;
        this.speed=speed;
    }
    public setlife(value:number){
        this.life+=value;
    }
    public takelife():number{
        return this.life;
    }
}

class Enemy extends Personagem{

    toughness:number

    constructor(toughness:number, life:number,weapon:LightCone, basicAttack:BasicAttack, skill:Skill, attack:number, defense: number, speed:number,id:string){
        super(life,weapon,basicAttack, skill, attack, defense, speed, id);

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

        return ally;
    }

    else if (id == 1) {

        var ally = [new Personagem(2600,new LightCone(800,500,450),new BasicAttack('a', 50, 1), new Skill('a', 'attack', 200, 2 ), 1000,800,100,'hpAlly' + iteration)];//Huohuo
        iteration++;

        return ally;
    }

    else if (id == 2) {

        var ally = [new Personagem(2600,new LightCone(800,500,450),new BasicAttack('a', 50, 1), new Skill('a', 'attack', 200, 2 ),1000,800,100,'hpAlly' + iteration)]; //Kafka
        iteration++;

        return ally;
    }

    else if (id == 3) {

        var ally= [new Personagem(2600,new LightCone(800,500,450),new BasicAttack('a', 50, 1), new Skill('a', 'attack', 200, 2 ), 1000,800,100,'hpAlly' + iteration)]; //Black Swan
        
        return ally;
    }

    else if (id == 4) {

        var ally= [new Personagem(2600,new LightCone(800,500,450),new BasicAttack('a', 50, 1), new Skill('a', 'attack', 200, 2 ), 1000,800,100,'hpAlly' + iteration)]; //Ruan Mei
        iteration++;

        return ally;
    }

    else if (id == 5) {

        var ally= [ new Personagem(2600,new LightCone(800,500,450),new BasicAttack('a', 50, 1), new Skill('a', 'attack', 200, 2 ), 1000,800,100,'hpAlly' + iteration)];//Aventurine
        iteration++;

        return ally;        
    }

    else if (id == 6) {

        var ally = [new Personagem(2600,new LightCone(800,500,450),new BasicAttack('a', 50, 1), new Skill('a', 'attack', 200, 2 ), 1000,800,100,'hpAlly1')]; //Yanqing
        iteration++;
        return ally;
    }

    
    return iteration;

}

function animacao_da_vida_1(hpId, dano, vida) {
    var larguraAtual = Personagem[].takelife() * 6;  // Supondo que a largura seja diretamente proporcional � vida
    var interval = setInterval(() => {
        larguraAtual -= 1;
        if (larguraAtual <= (vida - dano) * 6) {
            larguraAtual = (vida - dano) * 6;
            clearInterval(interval);
        }

        document.getElementById(hpId).style.width = String(larguraAtual) + 'px';
    }, 1000 / 60);
    setTimeout(() => {
        if (vida-dano<=0){
            var normal=document.getElementById(hpId).innerHTML;
            document.getElementById(hpId).style.width ='600px';
            setTimeout(() => {
                document.getElementById(hpId).innerHTML=normal
            },1000);
        }
    },300*dano);
}

function ultAnimation(ultimate) {
    var altura = Ultimate[].TakeEnergy()/20;  // Supondo que a largura seja diretamente proporcional � vida
    var interval = setInterval(() => {
        altura -= 1/20;
        if (altura <= (vida + dano) * 6) {
            altura = (vida + dano) * 6;
            clearInterval(interval);
        }

        document.getElementById(hpId).style.width = String(larguraAtual) + 'px';
    }, 1000 / 60);
    setTimeout(() => {
        if (vida-dano<=0){
            var normal=document.getElementById(hpId).innerHTML;
            document.getElementById(hpId).innerHTML+='<br><h1>charizard ganhou</h1>'
            vidap2=100;
            vidap1=100
            document.getElementById(hpId).style.width ='600px';
            setTimeout(() => {
                document.getElementById(hpId).innerHTML=normal
            },1000);
        }
    },300*dano);
}



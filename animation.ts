class ultimate{
    energy:number;
    multiplier:number;
    actual_energy:number;
    constructor(energy:number,multiplier:number){
        this.energy=energy;
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
class litghcone{
    private vida:number;
    private attack:number;
    private defense: number;
    
    constructor( life:number=0, attack:number=0, defense:number=0){
        this.attack=attack;
        this.defense=defense;
        this.vida=life;
    }
}
class personagem{
    private id:string
    private vida:number;
    private attack:number;
    private defense: number;
    private speed: number;
    private weapon:litghcone;
    constructor(life:number,weapon:litghcone, attack:number, defense: number, speed:number,id:string){
        this.id=id
        this.vida=life;
        this.weapon=weapon;
        this.attack=attack;
        this.defense=defense;
        this.speed=speed;
    }
    public setlife(value:number){
        this.vida+=value;
    }
    public takelife():number{
        return this.vida;
    }
}

var ally1=new personagem(2600,new litghcone(800,500,450),1000,800,100,'hpAlly1')
var ally2=new personagem(2600,new litghcone(800,500,450),1000,800,100,'hpAlly2')
var ally3=new personagem(2600,new litghcone(800,500,450),1000,800,100,'hpAlly3')
var ally4=new personagem(2600,new litghcone(800,500,450),1000,800,100,'hpAlly4')
var ally5=new personagem(2600,new litghcone(800,500,450),1000,800,100,'hpAlly5')
var ally6=new personagem(2600,new litghcone(800,500,450),1000,800,100,'hpAlly6')

function animacao_da_vida_1(hpId, dano, vida) {
    var larguraAtual = vida * 6;  // Supondo que a largura seja diretamente proporcional � vida
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

function ultAnimation(ultimate) {
    var altura = personagem.TakeEnergy()/20;  // Supondo que a largura seja diretamente proporcional � vida
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



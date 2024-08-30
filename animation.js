

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



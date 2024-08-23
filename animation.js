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
            var normal=document.getElementById('vidap1').innerHTML;
            document.getElementById(hpId).innerHTML+='<br><h1>charizard ganhou</h1>'
            vidap2=100;
            vidap1=100
            document.getElementById('vidap2').style.width ='600px';
            document.getElementById(hpId).style.width ='600px';
            setTimeout(() => {
                document.getElementById('vidap1').innerHTML=normal
            },1000);
        }
    },300*dano);
}


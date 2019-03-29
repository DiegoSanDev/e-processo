function limparCampos(){
    document.getElementById('processo').value = ""
    document.placeholder="_______-__.____._.__.____"
    document.getElementById('vara').value=""
    document.getElementById('valor').value=""
    document.getElementById('autor').value=""
}

$('#checkProcessos').change(function(){
    let btnProcessos = document.getElementById('btnProcessos')
    let btnFormulario = document.getElementById('btnFormulario')
    let qtdProcessos = document.getElementById('qtdProcessos');
    if(this.checked){
        btnProcessos.disabled = false
        qtdProcessos.innerHTML = "Processos = ( 0 ) "
        qtdProcessos.style.color="red";
    }else{
        btnProcessos.disabled = true
        qtdProcessos.innerHTML = ""
        processosA = []
        processosB = []
    }
});

$('#checkReu').change(function(){
    let reu = document.getElementById('reu');
    if(this.checked){
        reu.readOnly = false;
    }else{
        reu.readOnly = true;
    }
});

$('#checkAdvogados').change(function(){
    let advogado1 = document.getElementById('advogado1');
    let advogado2 = document.getElementById('advogado2');
    let advogado3 = document.getElementById('advogado3');
     if(this.checked){
         advogado1.readOnly = false;
         advogado2.readOnly = false;
         advogado3.readOnly = false;
     }else{
         advogado1.readOnly = true;
         advogado2.readOnly = true;
         advogado3.readOnly = true;
     }
 });
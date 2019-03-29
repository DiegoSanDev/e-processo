function validar(){
    let processo = document.getElementById('processo');
    let vara = document.getElementById('vara');
    let valor = document.getElementById('valor');
    let autor = document.getElementById('autor');
    let advogado1 = document.getElementById('advogado1');
    let advogado2 = document.getElementById('advogado2');
    let advogado3 = document.getElementById('advogado3');
    let reu = document.getElementById('reu');

    if(processo.value.trim() === ""){
        processo.focus();
        processo.placeholder="Informe o número do processo."
        return false;
    }else if(vara.value.trim() === ""){
        vara.focus();
        vara.placeholder="Informe a Vara."
        return false;
    }else if(valor.value.trim() === "" || valor.value <= 0){    
        alert("Informe o Valor.");
        return false;
    }else if(autor.value.trim() === ""){
        autor.focus();
        autor.placeholder="Informe o Autor(a)."
        return false;
    }else if(advogado1.value.trim() === ""){
        advogado1.focus();
        advogado1.placeholder="Informe o Advogado."
        return false;
    }else if(advogado2.value.trim() === ""){
        advogado2.focus();
        advogado2.placeholder="Informe o Advogado."
        return false;
    }else if(advogado3.value.trim() === ""){
        advogado3.focus();
        advogado3.placeholder="Informe o Advogado."
        return false;
    }else if(reu.value.trim() === ""){
        reu.focus();
        reu.placeholder="Informe o Reu."
        return false;
    }
    return true;
}
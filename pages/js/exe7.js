function areaResultado() {
            
    document.getElementById("resultado").style.display="block";
    calcularPrestacao();

}

function calcularPrestacao() {
    
    var valorP = parseFloat(document.forms["form"]["valorP"].value);
    var valorTaxa = parseFloat(document.forms["form"]["valorTaxa"].value);
    var tempo = parseInt(document.forms["form"]["valorTaxa"].value);

    var prestacao = valorP + (valorP * (valorTaxa/100) * tempo);

    document.getElementById("result").innerHTML=prestacao;

}
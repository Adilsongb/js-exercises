function areaResultado() {
            
    document.getElementById("resultado").style.display="block";
    calcularOperacoes();

}

function calcularOperacoes() {
    
    var valorA = parseInt(document.forms["form"]["valorA"].value);
    var valorB = parseInt(document.forms["form"]["valorB"].value);

    var x = document.getElementsByClassName("valorA");
    var y = document.getElementsByClassName("valorB");

    for (var i = 0; i < x.length && i < y.length; i++) {
        
        x[i].innerHTML=valorA;
        y[i].innerHTML=valorB;       

    }

    document.getElementById("adicao").innerHTML=valorA + valorB;

    document.getElementById("subtracao").innerHTML=valorA - valorB;

    document.getElementById("multiplicacao").innerHTML=valorA * valorB;

}
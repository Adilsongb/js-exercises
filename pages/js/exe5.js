function areaResultado() {
            
    document.getElementById("resultado").style.display="block";
    calcularConversao();

}

function calcularConversao() {
    
    var mm = document.forms["form"]["mm"].value;
    var mm_p = 25.4;

    var pol = parseFloat(mm) / mm_p;

    document.getElementById("areaResult1").innerHTML=mm;
    document.getElementById("areaResult2").innerHTML=pol.toFixed(2);

}
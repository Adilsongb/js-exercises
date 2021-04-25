function areaResultado() {
            
    document.getElementById("resultado").style.display="block";
    calcularTemperatura();

}

function calcularTemperatura() {
    
    var tempC = document.forms["form"]["tempC"].value;

    var tempF = (parseFloat(tempC) * (9/5)) + 32;

    document.getElementById("areaResult1").innerHTML=parseFloat(tempC);
    document.getElementById("areaResult2").innerHTML=tempF;
    
}
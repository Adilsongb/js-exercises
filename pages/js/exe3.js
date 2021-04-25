function areaResultado() {
            
    document.getElementById("resultado").style.display="block";
    calcularVolume();

}

function calcularVolume() {
    
    const pi = 3.14159;
    var raio = document.forms["form"]["raio"].value;
    var altura = document.forms["form"]["altura"].value;

    var volume = pi * (parseFloat(raio) * parseFloat(raio)) * altura;

    document.getElementById("areaResult").innerHTML=volume.toFixed(2);    

}
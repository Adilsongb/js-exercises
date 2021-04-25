function areaResultado() {
            
    document.getElementById("resultado").style.display = "block";
    calcularArea();

}

function calcularArea() {
    
    const pi = 3.14159;
    var raio = document.forms["form"]["raio"].value;

    var area = pi * (raio * raio);

    document.getElementById("areaResult").innerHTML = area.toFixed(2);

    console.log(pi);
    console.log(raio);
    console.log(area.toFixed(2));

}
function areaResultado(){

    document.getElementById('tabelaResult').style.display='block';
    calculandoMedia();

}

function calculandoMedia() {

    var n1 = document.forms["form"]["nota1"].value;
    var n2 = document.forms["form"]["nota2"].value;



    var media = (parseFloat(n1) + parseFloat(n2))/2;

    document.getElementById("dado1").innerHTML = n1;
    document.getElementById("dado2").innerHTML = n2;
    document.getElementById("dado3").innerHTML = media;

}
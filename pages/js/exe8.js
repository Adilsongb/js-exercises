// Variaveis
var quantHamb = 0;
var quantChe = 0;
var quantMilk = 0;
var quantRef = 0;

// Variaveis de valores
var vH, vC, vM, vR;
var valorTotal = 0;

// ADD E RETIRAR ITEM

function retirarItem(item) {
    
    //Hamburguer
    if (item == 1) {
        
        quantHamb -= 1;
        document.getElementById("quantidadeH").innerHTML=quantHamb;

        if (quantHamb == 0) {

        document.getElementById("retirarBotaoH").style.visibility = "hidden";

        }

    }

    //Cheeseburguer
    if (item == 2) {
        
        quantChe -= 1;
        document.getElementById("quantidadeC").innerHTML=quantChe;

        if (quantChe == 0) {

        document.getElementById("retirarBotaoC").style.visibility = "hidden";

        }

    }

    //MilkShake
    if (item == 3) {
        
        quantMilk -= 1;
        document.getElementById("quantidadeM").innerHTML=quantMilk;

        if (quantMilk == 0) {

        document.getElementById("retirarBotaoM").style.visibility = "hidden";

        }

    }

    //Refrigerante
    if (item == 4) {
        
        quantRef -= 1;
        document.getElementById("quantidadeR").innerHTML=quantRef;

        if (quantRef == 0) {

        document.getElementById("retirarBotaoR").style.visibility = "hidden";

        }

    }

}

function addItem(item) {
    
    //Hamburguer
    if (item == 1) {
        
        quantHamb += 1;
        document.getElementById("quantidadeH").innerHTML=quantHamb;
        document.getElementById("retirarBotaoH").style.visibility = "visible";

    }

    //Cheeseburguer
    if (item == 2) {
        
        quantChe += 1;
        document.getElementById("quantidadeC").innerHTML=quantChe;
        document.getElementById("retirarBotaoC").style.visibility = "visible";

    }

    //MilkShake
    if (item == 3) {
        
        quantMilk += 1;
        document.getElementById("quantidadeM").innerHTML=quantMilk;
        document.getElementById("retirarBotaoM").style.visibility = "visible";

    }

    //Refrigerante
    if (item == 4) {
        
        quantRef += 1;
        document.getElementById("quantidadeR").innerHTML=quantRef;
        document.getElementById("retirarBotaoR").style.visibility = "visible";

    }

}

//Calculo do total a pagar

function calcularTotal() {

    document.getElementById("resultado").style.display="block";

    vH = quantHamb * 12.50;
    vC = quantChe * 13.30;
    vM = quantMilk * 8.00;
    vR = quantRef * 5.00;

    valorTotal = vH + vC + vM + vR;

    document.getElementById("result").innerHTML=valorTotal.toFixed(2);
    
}
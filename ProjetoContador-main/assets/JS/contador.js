//Método 1: chama a função
var btAddCase0 = document.getElementsByName('adicionar')[0];
var btSubCase0= document.getElementsByName('subtrair')[0];
btAddCase0.addEventListener("click", incrementCase0);
btSubCase0.addEventListener("click", decrementCase0);

var btAddCase1 = document.getElementsByName('adicionar')[1];
var btSubCase1= document.getElementsByName('subtrair')[1];
var currentNumberCase1 = Number(document.getElementsByName('currentNumber')[1].innerHTML); //Valor 
if(currentNumberCase1>=0 && currentNumberCase1<=10){
    btAddCase1.addEventListener("click", incrementCase1);
    btSubCase1.addEventListener("click", decrementCase1);
}

var btAddCase2 = document.getElementsByName('adicionar')[2];
var btSubCase2= document.getElementsByName('subtrair')[2];
btAddCase2.addEventListener("click", incrementCase2);
btSubCase2.addEventListener("click", decrementCase2);

function incrementCase0(){
    let currentNumberSpan = document.getElementsByName('currentNumber')[0]; //Span
    let currentNumber = Number(document.getElementsByName('currentNumber')[0].innerHTML); //Valor 
    currentNumber = currentNumber + 1;
    currentNumberSpan.innerText = currentNumber;

}
function decrementCase0(){
    let currentNumberSpan = document.getElementsByName('currentNumber')[0]; //Span
    let currentNumber = Number(document.getElementsByName('currentNumber')[0].innerHTML);
    currentNumber = currentNumber - 1;
    currentNumberSpan.innerText = currentNumber;
}
function incrementCase1(){
    let currentNumberSpan = document.getElementsByName('currentNumber')[1]; //Span
    if(currentNumberCase1>=0 && currentNumberCase1<10){
        currentNumberCase1 = currentNumberCase1 + 1;
        currentNumberSpan.innerText = currentNumberCase1;
    }
}
function decrementCase1(){
    let currentNumberSpan = document.getElementsByName('currentNumber')[1]; //Span
    if(currentNumberCase1>0 && currentNumberCase1<=10){
        currentNumberCase1 = currentNumberCase1 - 1;
        currentNumberSpan.innerText = currentNumberCase1;
    }
}
function incrementCase2(){
    let currentNumberSpan = document.getElementsByName('currentNumber')[2]; //Span
    let currentNumber = Number(document.getElementsByName('currentNumber')[2].innerHTML); //Valor 
    currentNumber = currentNumber + 1;
    currentNumberSpan.innerText = currentNumber;
    if(currentNumber<0){
        currentNumberSpan.style.color = 'red';
    }else{
        currentNumberSpan.style.color = 'black';
    }
}
function decrementCase2(){
    let currentNumberSpan = document.getElementsByName('currentNumber')[2]; //Span
    let currentNumber = Number(document.getElementsByName('currentNumber')[2].innerHTML); //Valor 
    currentNumber = currentNumber - 1;
    currentNumberSpan.innerText = currentNumber;
    if(currentNumber<0){
        currentNumberSpan.style.color = 'red';
    }else{
        currentNumberSpan.style.color = 'black';
    }
}


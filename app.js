//ALL OF THE HTML ELEMENTS
const result = document.getElementById('results');
const ip1 = document.getElementById('ip1');
const ip2 = document.getElementById('ip2');
const calc = document.getElementById('calc');
const rand = document.getElementById('rand');
const clr = document.getElementById('clr');
//EVENT LISTENER FOR THE CALC BUTTON
calc.addEventListener(`click`,function(){
//created two new variables that use parsefloat to convert a string to anumbar
const firstNum=parseFloat(ip1.value);
const secondNum=parseFloat(ip2.value);
//sets the inner html tothe sum of the the two inputs
result.innerHTML=firstNum+secondNum;
})

//event listner for clear button
clr.addEventListener(`click`,function(){
    //RESET THE THREE AREAA TO AN EMPTY STRING
ip1.value=``;
ip2.value=``;
result.innerHTML=``;
});




//a function that generate a random number between 0 and 1000
function randomNumberGenerator(){
    return Math.floor(Math.random()*1000);
}
rand.addEventListener(`click`,function(){
    ip1.value=randomNumberGenerator();
    ip2.value=randomNumberGenerator();
})
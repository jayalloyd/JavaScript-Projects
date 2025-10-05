let counterDisplay=document.getElementById('counterValue');
let counterButton=document.getElementById('count');
let resetButton=document.getElementById('reset');
let counter=0;


function Counter(){




counter++;

counterDisplay.innerText=counter;



}
let count=document.getElementById('count').addEventListener('click',Counter);
function Reset(){
//clears prev session

let counter="";
counterDisplay.innerText=counter;


}
let reset=document.getElementById('reset').addEventListener('click',Reset);
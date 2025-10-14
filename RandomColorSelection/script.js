let clickButton=document.querySelector('button');



function changeRandomColor(){

const randomColor = Math.floor(Math.random() * 16777215).toString(16);
 return `#${randomColor.padStart(6, '0')}`;

}
function handleClick(){

document.body.style.backgroundColor=changeRandomColor();

}

clickButton.addEventListener('click', handleClick); 
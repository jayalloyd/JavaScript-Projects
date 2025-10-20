const  textContainer=document.getElementById('text-container');
const textArea = document.getElementById('text-area');
const para=document.createElement('p');
textContainer.appendChild(para);

function charCounter(event){
    let MAX_LENGTH=100;
 const charLength=event.target.value.length;
 const remaining=MAX_LENGTH-charLength;
 para.textContent=`Character Count: ${charLength} and the remaining: ${remaining}`;
    if(charLength>MAX_LENGTH){
      textArea.readOnly = true;
    }

}

textArea.addEventListener('input',charCounter);



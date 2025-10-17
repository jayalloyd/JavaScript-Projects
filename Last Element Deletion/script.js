let shoppingList=document.getElementById('shopping-list');
let deleteButton=document.getElementById('delete-btn');
function lastElementRemove(){
let findLastElement =shoppingList.lastElementChild;
findLastElement.remove();


}
deleteButton.addEventListener('click',lastElementRemove);
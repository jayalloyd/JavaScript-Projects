
        // 1. Get references to the DOM elements (input, button, ul).
        const taskInput = document.getElementById('taskInput');
        const addTaskButton = document.getElementById('addTaskButton');
        const taskList = document.getElementById('taskList');
      
      const  tasks= [];
        //add task function

      function addTasks(){
        let taskEntered= taskInput.value.trim();
      if(taskEntered === ""){
       return;
     }
        
        tasks.unshift(taskEntered);

 console.log(tasks);
 const listItem = document.createElement('li')
 listItem.className = 'task-item flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-red-500 hover:shadow-md transition';

  
    listItem.innerHTML = `
        <span class="text-gray-700 font-medium cursor-pointer flex-grow">${taskEntered}</span>
        <button class="delete-button text-gray-400 hover:text-red-500 transition duration-150 p-1 rounded-full hover:bg-red-50">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
    `;

taskList.appendChild(listItem);

}    

function removeTasks(event) {
    // 1. Check if the clicked target or its parent is the delete button
    const deleteButton = event.target.closest('.delete-button');


if (deleteButton) {
        // 2. Find the main task item container (the <li>)
        const taskElement = event.target.closest('.task-item'); 

        // 3. Get the text to remove it from the array
        const taskText = taskElement.querySelector('span').textContent.trim();

        // 4. Remove from Array (Recreate the array without the removed task)
        const index = tasks.indexOf(taskText);
        if (index > -1) {
            tasks.splice(index, 1); // Removes 1 item at the identified index
        }
        
        // 5. Remove from DOM (Visual removal)
        taskElement.remove();

        console.log("Task removed. Current array:", tasks);



}
    
    }



  let taskSelected= taskList.addEventListener('click',removeTasks);
let add= addTaskButton.addEventListener('click',addTasks);




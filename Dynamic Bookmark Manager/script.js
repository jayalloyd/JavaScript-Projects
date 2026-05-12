 const addBtn = document.getElementById('addBtn');
        const siteInput = document.getElementById('siteName');
        const list = document.getElementById('bookmarkList');
    
       addBtn.addEventListener('click', () => {
    const value = siteInput.value;

    if (value === "") {
        alert("Please enter a name!");
        return; // Backend style guard clause
    }

    // 1. Create the container (li)
    const li = document.createElement('li');
    
    // 2. Add the content and the delete button
    li.innerHTML = `
        <span>${value}</span>
        <button class="delete-btn">Delete</button>
    `;

    // 3. Logic for the Delete Button (Targeting it specifically inside this li)
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove(); // This is the "DELETE" command
    });

    // 4. Update the The DOM List
    list.appendChild(li);

    // 5. Clear the "Form"
    siteInput.value = "";
});
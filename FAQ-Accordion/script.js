// Select all accordion header buttons
let accordionBtns = document.querySelectorAll(".accordion-header"); 



accordionBtns.forEach((btn) => {
    btn.addEventListener("click", () => { 
        
     // Use .parentElement to climb up to the main container->accordion-item
        const itemToToggle = btn.parentElement;
        
        // Now we toggle the 'active' class on the *single* parent item  ->manage UI state via CSS
        itemToToggle.classList.toggle("active");
        
    });
});

// // Select all accordion header buttons
// let accordionBtns = document.querySelectorAll(".accordion-header"); 



// accordionBtns.forEach((btn) => {
//     btn.addEventListener("click", () => { 
        
//      // Use .parentElement to climb up to the main container->accordion-item
//         const itemToToggle = btn.parentElement;
        
//         // Now we toggle the 'active' class on the *single* parent item  ->manage UI state via CSS
//         itemToToggle.classList.toggle("active");
        
//     });
// });
const accordionBtns = document.querySelectorAll(".accordion-header");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Get the parent accordion item of the clicked button
    const itemToToggle = btn.parentElement;

    // Close all other accordion items (remove 'active' class)
    document.querySelectorAll(".accordion-item.active").forEach((item) => {
      if (item !== itemToToggle) {
        item.classList.remove("active");
      }
    });

    // Toggle the clicked item
    itemToToggle.classList.toggle("active");
  });
});

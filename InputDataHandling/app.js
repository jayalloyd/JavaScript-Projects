const TIP_RATE = 0.15;

// 1. Element Selection: Use 'const' for variables that won't be reassigned
//    and use the correct function: document.getElementById()
const billInput = document.getElementById('enteredAmount');
const totalDisplay = document.getElementById('amount-display-result');
const tipDisplay = document.getElementById('amount-display-tip'); 


function calculateTip() { 
    // Get the numerical value from the input field
    const userAmount = parseFloat(billInput.value);
    
    // Input Validation: Check if input is a valid positive number
    if (isNaN(userAmount) || userAmount <= 0) {
        // Clear displays if input is invalid
        tipDisplay.textContent = 'Tip: $0.00';
        totalDisplay.textContent = 'Total amount: $0.00';
        return; 
    }
    
    // Calculations
    const tipAmount = userAmount * TIP_RATE;
    const totalAmount = tipAmount + userAmount; 
    
    // 2. FIX for Scope & Formatting: Format the amounts using .toFixed(2)
    const formattedTip = tipAmount.toFixed(2);
    const formattedTotal = totalAmount.toFixed(2);
    
    // Display results using template literals
    tipDisplay.textContent = `Tip: $${formattedTip}`; 
    totalDisplay.textContent = `Total amount: $${formattedTotal}`;
}

// 3. FIX for Listener: Attach the listener directly to the specific input element
if (billInput) {
    billInput.addEventListener('input', calculateTip);
}
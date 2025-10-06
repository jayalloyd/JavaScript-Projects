// References to DOM elements
        const form = document.getElementById('registration-form');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');
        const messageBox = document.getElementById('message-box');
        const messageContent = document.getElementById('message-content');
        
        // --- Helper function to display custom messages 
        function displayMessage(message, type) {
            messageContent.textContent = message;
            
            // Clear previous classes and set new ones based on type
            messageBox.className = 'fixed p-4 rounded-lg shadow-xl text-white transition-opacity duration-300';
            messageBox.classList.remove('hidden');

            if (type === 'success') {
                messageBox.classList.add('bg-green-500');
            } else if (type === 'error') {
                messageBox.classList.add('bg-red-500');
            }
            
            // Hide the message after 4 seconds
            setTimeout(() => {
                messageBox.classList.add('hidden');
            }, 4000);
        }

        // --- Event Listener for Form Submission ---
        form.addEventListener('submit', function(event) {
            
            
            // This stops the browser from refreshing the page and attempting a traditional form submit.
            event.preventDefault();

            // Check native HTML5 validation status first
            if (!form.checkValidity()) {
                // If HTML5 rules (like 'required' or 'type="email"') fail, the browser
                // will show its default error tooltips, so we just return here.
                displayMessage("Please fill out all fields correctly.", "error");
                return;
            }

            // 2. Custom Validation: Check if the two password fields match
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;

            if (password !== confirmPassword) {
                // Show a custom error message
                displayMessage("Error: The passwords you entered do not match.", "error");
                
                // Clear the password fields for security and better UX
                passwordInput.value = '';
                confirmPasswordInput.value = '';
                
                // Set focus back to the first password field
                passwordInput.focus();
                
                return; // Stop the submission process
            }

        
            
            displayMessage("Success! Form data is valid and ready to submit to the server.", "success");
            
            // For demo purposes, clear the form after successful "submission"
            form.reset(); 
        });
 // Mock data structure (simulating API response)
        const transactions = [
            { id: 1, description: "Groceries", category: "Food", amount: 45.50 },
            { id: 2, description: "Bus Pass", category: "Travel", amount: 12.00 },
            { id: 3, description: "Netflix", category: "Subscription", amount: 15.99 },
            { id: 4, description: "Dinner Out", category: "Food", amount: 65.00 },
            { id: 5, description: "Fuel", category: "Travel", amount: 30.00 },
            { id: 6, description: "Gym", category: "Subscription", amount: 29.99 },
        ];

        // DOM element references
        const totalOutput = document.getElementById('total-output');
        const categorySummaryOutput = document.getElementById('category-summary');
        const transactionList = document.getElementById('transaction-list');

        // Helper function for currency formatting
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        // --- Core Concept 1: Reduce to find a single total number ---
        function calculateTotal(data) {
            console.log("--- 1. Reduce: Calculating Total Amount ---");

            // 🔑 REDUCE: Takes an array and returns a single value (the accumulator).
            // Initial value (0) is critical for starting the sum.
            const total = data.reduce((accumulator, currentTransaction) => {
                // accumulator is the running total so far.
                // currentTransaction is the current item being processed.
                return accumulator + currentTransaction.amount;
            }, 0); // <-- This is the initial value (starting point)
            
            console.log("Final Total:", total);
            return total;
        }

        // --- Core Concept 2: Reduce to build a summary object ---
        function summarizeByCategory(data) {
            console.log("\n--- 2. Reduce: Creating Summary Object ---");

            // 🔑 REDUCE: We use an empty object ({}) as the initial value.
            // The accumulator (summary) now holds the running category totals.
            const summary = data.reduce((summary, transaction) => {
                const category = transaction.category;
                const amount = transaction.amount;

                // Check if the category exists in the summary object
                if (summary[category]) {
                    // If it exists, add the current amount to the existing total
                    summary[category] += amount;
                } else {
                    // If it doesn't exist, initialize it with the current amount
                    summary[category] = amount;
                }
                
                return summary;
            }, {}); // <-- Initial value is an empty object

            console.log("Category Summary Object:", summary);
            return summary;
        }

        // --- Render Functions ---
        function renderTransactions() {
            transactions.forEach(t => {
                const li = document.createElement('li');
                li.className = 'flex justify-between border-b border-gray-100 py-1';
                li.innerHTML = `
                    <span>${t.description} (${t.category})</span>
                    <span class="font-medium">${formatter.format(t.amount)}</span>
                `;
                transactionList.appendChild(li);
            });
        }

        function renderResults() {
            // Calculate Total
            const total = calculateTotal(transactions);
            totalOutput.textContent = formatter.format(total);

            // Calculate Summary Object
            const summary = summarizeByCategory(transactions);
            
            // Render Summary to the DOM
            categorySummaryOutput.innerHTML = '';//clears the old content
            for (const category in summary) {
                const p = document.createElement('p');
                p.innerHTML = `
                    <span class="font-semibold">${category}:</span> 
                    ${formatter.format(summary[category])}
                `;
                categorySummaryOutput.appendChild(p);
            }
        }

        // Initialize on load
        document.addEventListener('DOMContentLoaded', () => {
            renderTransactions();
            renderResults();
        });
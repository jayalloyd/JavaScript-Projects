 // --- DOM REFERENCES ---
        // Get the lightbox container by its ID
        const displayContainer = document.getElementById('display-container');
        
        // Select all image elements within the gallery
        
        const galleryImages = document.querySelectorAll('.row .column img');

        // --- IMAGE EXPANSION LOGIC ---
        function expandImage(event) {
            // 1. Clear previous content in the lightbox
            displayContainer.innerHTML = '';
            
            // 2. Create the new full-size image element
            let displayImage = document.createElement('img');
            
            // 3. Set the source to the clicked thumbnail's source
            displayImage.src = event.target.src;
            displayImage.alt = event.target.alt;
            
            // 4. Append the image and make the lightbox visible
            displayContainer.appendChild(displayImage);
            displayContainer.style.display = 'flex'; // Change from 'none' to 'flex'
        }
        
        // --- CLOSE LIGHTBOX LOGIC ---
        function closeLightbox(event) {
            // Only hide if the user clicks the background (displayContainer) itself, not the image
            // We check the ID to ensure we are clicking the backdrop
            if (event.target.id === 'display-container') {
                displayContainer.style.display = 'none';
            }
        }

        // --- ATTACH LISTENERS ---
        // 1. Loop through all gallery images and attach the click listener to each one.
        galleryImages.forEach(img => {
            img.addEventListener('click', expandImage);
        });

        // 2. Attach the listener to the lightbox container to handle closing.
        displayContainer.addEventListener('click', closeLightbox);
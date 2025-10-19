// 1. Select the necessary elements
const hoverImage = document.getElementById('hoverImage');
const imageWrapper = document.querySelector('.image-wrapper'); // FIX: Added '.' for class selector

// 2. Get the two source paths
const hoverImageSource = hoverImage.getAttribute('data-hover-src');
const originalImageSource = hoverImage.src; // Store the original src path

// --- Event Listener for MOUSEOVER ---
hoverImage.addEventListener('mouseover', function() {
    // 3. FIX: Change the source of the 'hoverImage' element
    hoverImage.src = hoverImageSource;
});

// --- Event Listener for MOUSEOUT ---
hoverImage.addEventListener('mouseout', function() {
    // 4. Change the source back to the original image path
    hoverImage.src = originalImageSource;
});


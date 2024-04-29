window.onload = function() {
    // Function to hide the loading overlay with a delay
    function hideLoadingOverlayWithDelay(delay) {
        setTimeout(function() {
            const loadingOverlay = document.querySelector('.loading-overlay');
            if (loadingOverlay) {
                loadingOverlay.style.display = 'none';
            }
        }, delay);
    }

    // Call the function to hide the loading overlay with a delay of 500 milliseconds
    hideLoadingOverlayWithDelay(600); // Adjust the delay as needed
};
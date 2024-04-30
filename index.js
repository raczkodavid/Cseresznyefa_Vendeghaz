window.onload = function() {
    function hideLoadingOverlayWithDelay(delay) {
        setTimeout(function() {
            const loadingOverlay = document.querySelector('.loading-overlay');
            if (loadingOverlay) {
                loadingOverlay.style.display = 'none';
            }
        }, delay);
    }
    hideLoadingOverlayWithDelay(600);
};

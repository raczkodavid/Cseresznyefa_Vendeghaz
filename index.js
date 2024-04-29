window.addEventListener('load', function () {
    const loadingOverlay = document.querySelector('.loading-overlay');
    const pageContent = document.getElementById('page-content');
  
    loadingOverlay.style.display = 'none';
});

document.getElementById('reset-btn').addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Reset the form to its initial state
    document.getElementById('reservation-form').reset();
  });
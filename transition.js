function showTransitionAndRedirect(url, logoPath) {
  const transition = document.getElementById('transition');
  const transitionLogo = document.getElementById('transition-logo');
  
  // Set the appropriate logo
  transitionLogo.src = logoPath;
  
  // Show transition
  transition.classList.add('active');
  
  // Redirect after delay
  setTimeout(() => {
    window.location.href = url;
  }, 1500);
}

// Add event listener to remove transition when returning to main page
window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    const transition = document.getElementById('transition');
    transition.classList.remove('active');
  }
});

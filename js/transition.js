function showTransitionAndRedirect(url, logoPath) {
  const transition = document.getElementById('transition');
  const transitionLogo = document.getElementById('transition-logo');
  
  // Set the transition logo
  transitionLogo.src = logoPath;
  
  // Show transition screen
  transition.classList.add('active');
  
  // Redirect after animation completes
  setTimeout(() => {
    window.location.href = url;
  }, 1500);
}

// Hide transition when returning via browser back button
window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    const transition = document.getElementById('transition');
    transition.classList.remove('active');
  }
});

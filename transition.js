
function showTransitionAndRedirect(url) {
  const transition = document.getElementById('transition');
  transition.style.display = 'flex';
  setTimeout(() => {
    window.location.href = url;
  }, 2000);
}

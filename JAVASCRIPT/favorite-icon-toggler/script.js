const favoriteButtons = document.querySelectorAll(".favorite-icon");

favoriteButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const isFilled = btn.classList.toggle("filled");
    btn.textContent = isFilled ? '❤' : '♡';
  });
});

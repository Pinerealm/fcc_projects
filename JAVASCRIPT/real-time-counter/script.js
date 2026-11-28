const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
  const text = textInput.value;
  if (text.length >= 50) {
    textInput.value = text.substring(0, 50);
    charCount.textContent = `Character Count: 50/50`;
    charCount.style.color = "red";
  } else {
    charCount.textContent = `Character Count: ${text.length}/50`;
    charCount.style.color = "inherit";
  }
});

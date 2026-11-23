const library = [
  "The Hobbit",
  "1984",
  "Dune",
  "Fahrenheit 451",
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "Moby Dick",
  "Pride and Prejudice",
  "Frankenstein",
];

const searchBtn = document.getElementById("search");
const statusDisplay = document.getElementById("statusMessage");
const bookInput = document.getElementById("bookTitleInput");

function findBook(title) {}

searchBtn.addEventListener("click", () => {
  const result = findBook(bookInput.value.trim());
  statusDisplay.textContent = result;
});

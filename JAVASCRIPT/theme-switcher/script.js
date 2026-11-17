const themes = [
  { name: "light", message: "A bright and clean theme for better visibility." },
  {
    name: "dark",
    message: "A sleek and modern theme for low-light environments.",
  },
  {
    name: "contrast",
    message: "A high-contrast theme for improved readability.",
  },
];

const themeSwitcherBtn = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const themesList = document.querySelectorAll("[role='menuitem']");
const liveRegion = document.querySelector("[aria-live='polite']");

themeSwitcherBtn.addEventListener("click", () => {
  liveRegion.textContent = "";
  if (themeDropdown.hasAttribute("hidden")) {
    themeDropdown.removeAttribute("hidden");
    themeSwitcherBtn.setAttribute("aria-expanded", "true");
  } else {
    themeDropdown.setAttribute("hidden", "");
    themeSwitcherBtn.setAttribute("aria-expanded", "false");
  }
});

themesList.forEach((themeItem) => {
  themeItem.addEventListener("click", () => {
    const themeName = themeItem.textContent.toLowerCase();
    const theme = themes.find((t) => t.name === themeName);

    if (theme) {
      document.body.className = `theme-${theme.name}`;
      liveRegion.textContent = theme.message;
    }

    themeDropdown.setAttribute("hidden", "");
  });
});

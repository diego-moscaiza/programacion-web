// --- Light & Dark Theme ---

const $lightThemeButton = document.getElementById("lightTheme");
const $darkThemeButton = document.getElementById("darkTheme");

const storeTheme = () => {
  const $rootDarkMode = document.documentElement.classList.contains("dark");
  $rootDarkMode
    ? localStorage.setItem("theme", "dark")
    : localStorage.setItem("theme", "light");
};

const loadStoredTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (!storedTheme) return;
  storedTheme === "dark"
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");
};

loadStoredTheme();

// Light button pressed
$lightThemeButton.addEventListener("click", () => {
  document.documentElement.classList.remove("dark");
  storeTheme();
});

// Dark button pressed
$darkThemeButton.addEventListener("click", () => {
  document.documentElement.classList.add("dark");
  storeTheme();
});

// --- Prefer System Theme ---

const $preferSystemThemeButton = document.getElementById("preferSystemColor");

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const preferSystemTheme = () => {
  localStorage.removeItem("theme");

  prefersDarkScheme.matches
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");

  prefersDarkScheme.addEventListener("change", preferSystemTheme);
};

$preferSystemThemeButton.addEventListener("click", preferSystemTheme);

if (!localStorage.getItem("theme")) {
  preferSystemTheme();
}

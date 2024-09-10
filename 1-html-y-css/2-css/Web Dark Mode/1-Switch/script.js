// Función para guardar el estado de la preferencia de color
const storeTheme = () => {
  const $rootDarkMode = document.documentElement.classList.contains("dark");
  $rootDarkMode
    ? localStorage.setItem("theme", "dark")
    : localStorage.setItem("theme", "light");
};

// Función para el switch cambie de tema
const $switchToggle = document.getElementById("input-switch");

$switchToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  storeTheme();
});

// Función para guardar la preferencia de color en el localStorage
const loadStoredTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (!storedTheme) return;

  storedTheme === "dark"
    ? (document.documentElement.classList.add("dark"),
      ($switchToggle.checked = true))
    : (document.documentElement.classList.remove("dark"),
      ($switchToggle.checked = false));
};

loadStoredTheme();

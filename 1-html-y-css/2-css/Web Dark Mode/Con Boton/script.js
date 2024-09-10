// Función para que el botón cambie de tema
const buttonToggle = document.getElementById("toggleTheme");

buttonToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
  saveTheme();
});

// Función para guardar el estado de la preferencia de color
const saveTheme = () => {
  if (document.documentElement.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

// Función para guardar la preferencia de color en el localStorage
const loadTheme = () => {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.documentElement.classList.add("dark-mode");
  } else {
    document.documentElement.classList.remove("dark-mode");
  }
};

loadTheme();


// Algoritmo para cambiar de tema de acuerdo a la preferencia de color de sistema operativo de usuario
const toggleThemeButton = document.getElementById("tooglePreferColor");

const preferColorTheme = async () => {
  // Compruebe si el sistema operativo del usuario tiene una preferencia de combinación de colores oscuros
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  // Función para actualizar el tema según la preferencia del sistema operativo del usuario.
  const updateTheme = async () => {
    if (prefersDarkScheme.matches) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }

  // Actualización inicial del tema
  updateTheme();
  saveTheme();
  // Actualice el tema cada vez que el usuario cambie su preferencia de sistema operativo.
  prefersDarkScheme.addEventListener("change", updateTheme);
};

// Función para que el botón cambie dependiendo de la preferencia de SO del usuario
toggleThemeButton.addEventListener("click", preferColorTheme);

// Funcion para guardar el estado de la preferencia de color
const saveTheme = () => {
  if (document.documentElement.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};


// Función para el switch cambie de tema
const switchToggle = document.querySelector(".theme-switch input");

switchToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
  saveTheme();
});


// Funcion para guardar la preferencia de color en el localStorage
const loadTheme = () => {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.documentElement.classList.add("dark-mode");
    switchToggle.checked = true;
  } else {
    document.documentElement.classList.remove("dark-mode");
    switchToggle.checked = false;
  }
};

loadTheme();

// Algoritmo para cambiar de tema de acuerdo a la preferencia de color de sistema operativo de usuario

const toggleThemeButton = document.getElementById("tooglePreferColor");

const preferColorTheme = () => {
  // Compruebe si el sistema operativo del usuario tiene una preferencia de combinación de colores oscuros
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  // Función para actualizar el tema según la preferencia del sistema operativo del usuario.
  function updateTheme() {
    if (prefersDarkScheme.matches) {
      document.documentElement.classList.add("dark-mode");
      switchToggle.checked = true;
    } else {
      document.documentElement.classList.remove("dark-mode");
      switchToggle.checked = false;
    }
  }

  // Actualización inicial del tema
  updateTheme();
  saveTheme();
  // Update the theme whenever the user changes their OS preference
  prefersDarkScheme.addEventListener("resize", updateTheme);
};

// Función para que el botón cambie dependiendo de la preferencia de SO del usuario
toggleThemeButton.addEventListener("click", preferColorTheme);

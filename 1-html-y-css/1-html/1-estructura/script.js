//Cuando se haga click en 'h1' el fondo del documento de tornará verde.
//addEventListener es como decir que el programa escuche un evento, en este caso 'click'.

document.querySelector("h1").addEventListener("click", () => {
  document.body.style.background = "green";
});

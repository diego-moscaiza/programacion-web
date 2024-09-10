// DEFINIENDO VARIABLES Y CONSTANTES

const cronometro = document.getElementById('cronometro');
const botonInicioPausa = document.getElementById('boton-inicio-pausa')
const botonReiniciar = document.getElementById('boton-reiniciar')

let [horas, minutos, segundos] = [0, 0, 0]
let intervaloDeTiempo;
let estadoCronometro = 'pausado'

// DEFINIENDO FUNCIONES

function asignarFormato(unidadDelTiempo) {
    return unidadDelTiempo < 10 ? '0' + unidadDelTiempo : unidadDelTiempo
}

function actualizarCronometro() {
    segundos++;
    if (segundos / 60 === 1) {
        segundos = 0
        minutos++
        if (minutos / 60 === 1) {
            minutos = 0
            horas++
        }
    }

    const segundosConFormato = asignarFormato(segundos);
    const minutosConFormato = asignarFormato(minutos);
    const horasConFormato = asignarFormato(horas);

    cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
}

//BOTONES INCIAR Y PAUSAR.

function iniciarCronometro() {
    botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"/>';
    botonInicioPausa.classList.remove('iniciar')
    botonInicioPausa.classList.add('pausar')
    estadoCronometro = 'andando'
}

function pausarCronometro() {
    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"/>';
    botonInicioPausa.classList.remove('pausar')
    botonInicioPausa.classList.add('iniciar')
    estadoCronometro = 'pausado'
}

// EventListener

botonInicioPausa.addEventListener('click', function () {
    if (estadoCronometro === 'pausado') {
        intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
        iniciarCronometro();
    } else {
        window.clearInterval(intervaloDeTiempo)
        pausarCronometro();
    }
})

botonReiniciar.addEventListener('click', function () {
    window.clearInterval(intervaloDeTiempo);
    [horas, minutos, segundos] = [0, 0, 0]

    //REINICIAR Y PAUSAR.
    cronometro.innerText = '00:00:00'
    pausarCronometro();
})
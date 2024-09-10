// - Para acceder a algunas APIs se puede necesitar unos 'headers' o cabeceras para poder concectarse.

const url = 'https://open-weather13.p.rapidapi.com/city/lima';
const options = {
	// - Método HTTP utilizado y sus headers.
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f67721f837mshd50448a68131660p18140cjsnf8746788c273',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

fetch(url, options)
    .then(response => response.json())
    .then(response => console.log(response))
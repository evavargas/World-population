"use strict";

//********************************
//*** Manejo de errores

var boton = document.getElementById('boton');
var mensajes = document.getElementById('mensajes');
var contBanderas = document.getElementById('paises');

boton.addEventListener('click', function () {
    getCountries()
        .then(data => data.json())
        .then(countries => {
            mostrarBanderas(countries);
        })
        .catch(error => {
             mensajes.classList.toggle('hide');
             mensajes.innerHTML = error;
             setTimeout(() => mensajes.classList.toggle('hide'), 6000);
        })
});

function getCountries() {
    return fetch('https://restcountries.eu/rest/v2/all');
}

function mostrarBanderas(countries) {
    contBanderas.innerHTML = '';
    countries.map((country, i) => {
        let titulo = document.createElement('h3');
        let bandera = document.createElement('img');
        let contenido = document.createElement('p');
        titulo.innerHTML = "País nº"+(i + 1) + " - " + country.name;
        bandera.src = country.flag;
        bandera.width = '80';
        bandera.height = '56';
        bandera.alt= country.name;
        bandera.title= country.name;
        bandera.id= '#'+country.name;
        contenido.innerHTML = "Cantidad de habitantes: " +country.population;
        contBanderas.appendChild(titulo);
        contBanderas.appendChild(bandera);
        contBanderas.appendChild(contenido);
    })
}
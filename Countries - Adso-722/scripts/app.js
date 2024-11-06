import { countries } from "../scripts/countries.js";


const makeCountry = (country) => {

    //esto es para crear el div, la imagen y el titulo de la cartas de los paises
    const container = document.createElement ('div')
    container.classList.add('card-country')
    container.addEventListener('mouseenter', showInfo)

    const imgContainer = document.createElement('img')
    imgContainer.src = country.flag
    imgContainer.alt = country.name

    const nameContainer = document.createElement('h2')
    nameContainer.textContent = country.name

    container.appendChild(imgContainer)
    container.appendChild(nameContainer)

    document.querySelector('main > section').appendChild (container)
}

//vamos a recorrer todos los paises y crearlos con una funcion en flecha 
const renderCountries = () => {
countries.forEach(country => makeCountry (country))
}

// esto dispara una alerta si la funcion esta correctamente escrita de mouseenter = (const showInfo = () => alert ('Funciona'))

// event solo es el evento que ocurrira con el mouse encima
// .target es la tarjeta a la cual le sucedera el evento
//.children es un arreglo que tomará valor de los hijos de la tarjeta
// .children es el que va a recorrer un tipo de arreglo de algun div para así poder sacar la informacion que necesite recorriendo cualquier elemento del div tanto como la imagen, titulo, etc

// textContent es el que va a tomar los elementos que tiene adentro sin tomar etiquetas, solo la informacion
const showInfo = (event) => {
    let currentCountry = event.target.children[1].textContent

    // esto buscará en el arreglo si el nombre (country.name) si esta y devolvera la informacion que le aparezca
    let foundCountry = countries.find (country => country.name === currentCountry)

    
    const country = document.querySelector('#demographics')
    country.children[0].textContent = ("Nombre: " +foundCountry.name)
    country.children[1].textContent = ("Capital: " +foundCountry.capital)
    country.children[2].textContent = ("Población: " +foundCountry.population)

}

// vamos primero a cargar todo el contenido del DOM (document object model) para luego cargar o ejecutar el resto

window.addEventListener('DOMContentLoaded',renderCountries)

// crear la busque por país y capital 
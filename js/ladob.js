/*VALORES DE CITY TOUR:
- misteriosa baires
- noche de tango
- arquitectura porteña
- arte urbano
- tango en la calle
- subterraneo*/


//primer desafio

let cityTour = prompt("Ingrese el nombre del City Tour elegido");
let pax = parseInt(prompt("Ingrese el numero de pasajeros"))
let precio1 = 2499;
let precio2 = 3499;

//Enzo, lo comenté porque sinó no me anda el prompt de más abajo

/*
function cotizacion(cityTour, pax){
    if (cityTour == "misteriosa buenos aires"){
        let resultado = precio1*pax;
        alert(`la cotización final por ${pax} es de $ ${resultado}`);
    }else if(cityTour = "noche de tango"){
        let resultado = precio2*pax;
        alert(`la cotización final por ${pax} es de $ ${resultado}`);
    }else if(cityTour == "arquitectura porteña"){
        let resultado = precio2*pax;
        alert(`la cotización final por ${pax} es de $ ${resultado}`);
    }else if(cityTour == "arte urbano"){
        let resultado = precio2*pax;
        alert(`la cotización final por ${pax} es de $ ${resultado}`);
    }else if(cityTour == "tango en la calle"){
        let resultado = precio2*pax;
        alert(`la cotización final por ${pax} es de $ ${resultado}`);
    }else if(cityTour == "subterraneo"){
        let resultado = precio1*pax;
        alert(`la cotización final por ${pax} es de $ ${resultado}`);
    }else{
        alert(`El City Tour ingresado no es válido`);
    }

    return resultado
}

cotizacion(cityTour, pax);
alert(resultado);
*/

//segundo desafio

const listaDePasajeros = [];

class Pasajeros {
    constructor (nombre, edad, nacionalidad) {
        this.nombre = nombre.toUpperCase();
        this.edad = parseInt(edad); 
        this.nacionalidad = nacionalidad.toUpperCase();
    }
}


/*
const datosPax = new Pasajeros(prompt("Ingrese su nombre completo"),prompt("Ingrese su edad"),prompt("Ingrese su nacionalidad"))
datosPax.datos()
console.log(listaDePasajeros)*/


const cityTours = [
    {id: 1, nombre : "misteriosa baires", desc: "Te contamos los secretos porteños mejores guardados.", precio: 2499, filtro : "historia"},
    {id: 2, nombre : "noche de tango", desc: "¿Querés aprender a bailar tango? En este tour te llevamos a una de las milongas más conocidas de Buenos Aires.", precio: 3499, filtro : "tango"},
    {id: 3, nombre : "arquitectura porteña", desc: "Desde casas coloniales hasta Clorindo Testa.", precio: 3499, filtro : "arte historia"},
    {id: 4, nombre : "arte urbano", desc: "Te llevamos a los distritos artísticos de Buenos Aires", precio: 3499, filtro : "arte historia"},
    {id: 5, nombre : "tango en la calle",  desc: "¿Querés aprender a bailar tango? Te proponemos vivirlo desde las calles de La Boca y San Telmo", precio: 3499, filtro : "tango"},
    {id: 6, nombre : "subterraneo", desc: "La red de subterráneos porteños cuenta con estaciones llenas de arte, en este tour te las mostramos", precio: 2499, filtro : "arte historia"}
]

//1er entrega del proyecto final
const historia = cityTours.filter((el) => el.filtro.includes("historia"))
const tango = cityTours.filter((el) => el.filtro.includes("tango"))
const arte = cityTours.filter((el) => el.filtro.includes("arte"))

console.log(historia)
console.log(tango)
console.log(arte)

//tercer desafio - DOM
function datosPax(){
    let cantidadPax = parseInt(prompt("Ingrese la cantidad de pasajeros"))
    for(let i = 0; i < cantidadPax; i++){
        const nombre = prompt(`Ingrese su nombre completo del ${i+1}° pasajero`);
        const edad = parseInt(prompt("Ingrese su edad"));
        const nacionalidad = prompt("Ingrese su nacionalidad");

        const datosPax = new Pasajeros(nombre, edad, nacionalidad)
        listaDePasajeros.push(datosPax);

        completarDatos(listaDePasajeros)

    }

}

const completarDatos = (pasajeros) => {

    const tbody = document.querySelector("tbody")
    for (const pasajero of listaDePasajeros){
        const tr = document.createElement("tr");

        tr.innerHTML = `<td>${pasajero.nombre}</td>
                        <td>${pasajero.edad}</td>
                        <td>${pasajero.nacionalidad}</td>`
        
        tbody.appendChild(tr)
    }
}

datosPax();

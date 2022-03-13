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

    datos(){
        listaDePasajeros.push(this.nombre, this.edad, this.nacionalidad);
        alert(listaDePasajeros)
    }

}

const datosPax = new Pasajeros(prompt("Ingrese su nombre completo"),prompt("Ingrese su edad"),prompt("Ingrese su nacionalidad"))
datosPax.datos()
console.log(listaDePasajeros)


const cityTours = [
    {nombre : "misteriosa baires", filtro : "historia"},
    {nombre : "noche de tango", filtro : "tango"},
    {nombre : "arquitectura porteña", filtro : "arte historia"},
    {nombre : "arte urbano", filtro : "arte historia"},
    {nombre : "tango en la calle", filtro : "tango"},
    {nombre : "subterraneo", filtro : "arte historia"}
]

//1er entrega del proyecto final
const historia = cityTours.filter((el) => el.filtro.includes("historia"))
const tango = cityTours.filter((el) => el.filtro.includes("tango"))
const arte = cityTours.filter((el) => el.filtro.includes("arte"))

console.log(historia)
console.log(tango)
console.log(arte)

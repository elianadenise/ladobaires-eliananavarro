/*VALORES DE CITY TOUR:
- misteriosa buenos aires
- noche de tango
- arquitectura porteña
- arte urbano
- tango en la calle
- subterraneo*/

let cityTour = prompt("Ingrese el nombre del City Tour elegido");
let pax = parseInt(prompt("Ingrese el numero de pasajeros"))
let precio1 = 2499;
let precio2 = 3499;

function cotizacion(cityTour, pax){
    if (cityTour = "misteriosa buenos aires"){
        let resultado = precio1*pax;
        alert(`la cotización final por ${pax} es de $ ${resultado}`);
    }else if(cityTour = "noche de tango"){
        let resultado = precio2*pax;
        alert(`la cotización final por ${pax} es de $ ${resultado}`);
    }else if(cityTour = "arquitectura porteña"){
        let resultado = precio2*pax;
        alert(`la cotización final por ${pax} es de $ ${resultado}`);
    }else if(cityTour = "arte urbano"){
        let resultado = precio2*pax;
        alert(`la cotización final por ${pax} es de $ ${resultado}`);
    }else if(cityTour = "tango en la calle"){
        let resultado = precio2*pax;
        alert(`la cotización final por ${pax} es de $ ${resultado}`);
    }else if(cityTour = "subterraneo"){
        let resultado = precio1*pax;
        alert(`la cotización final por ${pax} es de $ ${resultado}`);
    }else if(cityTour = ""){
        alert(`El City Tour ingresado no es válido`);
    }

    return cotizacionFinal

}

let precioFinal = cotizacion(cityTour, pax);
alert(precioFinal);
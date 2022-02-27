/*VALORES DE CITY TOUR:
- misteriosa buenos aires
- noche de tango
- arquitectura porteña
- arte urbano
- tango en la calle
- subterraneo*/

let cityTour = prompt("Ingrese el nombre del City Tour elegido");
let pax = parseInt(prompt("Ingrese el numero de pasajeros"))
let precio1 = 1925;
let precio2 = 3499;

function cotizacion(){
    switch(cityTour != ""){
        case "misteriosa buenos aires":
            let resultado = precio1*pax;
            alert(`la cotización final por ${pax} es de $ ${resultado}`);
            break
        case "noche de tango":
            let resultado = precio2*pax;
            alert(`la cotización final por ${pax} es de $ ${resultado}`);
            break
        case "arquitectura porteña":
            let resultado = precio2*pax;
            alert(`la cotización final por ${pax} es de $ ${resultado}`);
            break
        case "arte urbano":
            let resultado = precio2*pax;
            alert(`la cotización final por ${pax} es de $ ${resultado}`);
            break
        case "tango en la calle":
            let resultado = precio1*pax;
            alert(`la cotización final por ${pax} es de $ ${resultado}`);
            break
        case "subterraneo":
            let resultado = precio2*pax;
            alert(`la cotización final por ${pax} es de $ ${resultado}`);
            break
        default:
            alert(`no existe el City Tour ingresado`);
            cityTour;
    }

    return cotizacionFinal

}

let precioFinal = cotizacion("misteriosa buenos aires", 2);
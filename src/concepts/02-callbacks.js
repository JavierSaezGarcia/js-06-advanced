/**
 * 
 */


import { heroes } from "../data/heroes";

export const callbacksComponent = ( element ) => {
    
    //console.log('callbacksComponent');
    const id1 = "5d86371fd55e2e2a30fe1ccb1";
    const id2 = "5d86371fd55e2e2a30fe1ccb2";
    // EJEMPLO DE CALLBACK HELL: FUNCIONES QUE LLAMAN A FUNCIONES DE DENTRO QUE  
    // TIENEN OTRAS FUNCIONES QUE ASU VEZ TIENEN FUNCIONES DENTRO Y LLANMAN A OTRAS
    findHero( id1, (error, hero1) => {

        // element.innerHTML = hero?.name || 'No hay heroe';        
        if ( error ) {
            element.innerHTML = error;
            return;
        }

        findHero( id2,(error, hero2) => {

            // element.innerHTML = hero?.name || 'No hay heroe';        
            if ( error ) {
                element.innerHTML = error;
                return;
            }
            element.innerHTML =`${hero1.name} / ${ hero2.name}`;
        })
    });
}

/**
 * @param { String } id
 * @param { ( error: String|Null, hero: Object)=> void  } callback
 */

function findHero(id, callback) {

    const hero = heroes.find(hero => hero.id === id);
    if( !hero ) {
        callback(`Hero with id ${id} not found.`);
        return; //undefined
    }

    callback( null, hero );
}


/**
 * OTROS EJEMPLOS
 *  */ 
function calculate(num1, num2, callbackFunction) {
    return callbackFunction(num1, num2);
}

function calcProduct(num1, num2) {
    return num1 * num2;
}

function calcSum(num1, num2) {
    return num1 + num2;
}
// alerta a 75, producto de 5 y 15
console.log(calculate(5, 15, calcProduct));
// alerta a 20, la suma de 5 y 15
console.log(calculate(5, 15, calcSum));


//**************** Otro mas */
// EjEMPLO MDN CALLBACK
function saludar(nombre) {
    alert('Hola ' + nombre);
  }
  
  function procesarEntradaUsuario(callback) {
    let nombre = prompt('Por favor ingresa tu nombre.');
    callback(nombre);
  }
  
// procesarEntradaUsuario(saludar);




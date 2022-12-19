/**
 * ASYNC TRANSFORMA UNA FUNCION EN UNA PROMESA QUE RESUELVE LO QUE PONGAMOS EN EL RETURN
 * TIP: LAS FUNCIONES ASINCRONAS NO SIGUEN EL HILO PRINCIPAL, LEE DE FORMA LINEAL HASTA QUE ENCUENTRA 
 * UNA FUNCION ASINCRONA Y ESTA FUNCION LA APILA EN UNA PILA DE PROMESAS (EN CASO DE HABER MAS DE UNA) 
 * SOLO LEYENDO LA REFERENCIA DE ELLA PERO NO EJECUTANDO EL .THEN NI EL .CATCH 
 * PARA LANZARLA CUANDO ACABE EL HILO. ES DECIR LEE PRIMERO EL CODIGO SINCRONO Y LAS REFERENCIAS DEL ASINCRONO
 * Y CUANDO LO COMPLETA LA EJECUCION DEL SINCRONO
 * EJECUTA EL ASINCRONO => LOS ASYNC ( PROMESAS )
 * 
 */

import { heroes } from '../data/heroes';
/**
 * 
 * @param { HTMLDivElement } element 
 */

 export const asyncComponent = ( element ) => {

    const id1 = "5d86371f25a058e5b1c8a65e";
    console.log('Inicio de componente');

    // findHero( )
    findHero(id1)
        .then( name => element.innerHTML = name )
        // op2 .then( ({name}) => element.innerHTML = name )
        .catch( error => element.innerHTML = error)

    console.log('Fin del componente');

}

// Si ponemos async convertimos una funcion en una promesa, 
// es como si hicieramos: 
/*
const findHeroPromise = () => new Promise( resolve => {
    const hero = herores.find( hero => hero.id === id);
    resolve(hero);
})
*/
// que la funcion anterior seria lo mismo que poner async como en la siguiente

/**
 * @param { String } id
 * @returns { Promise<String> }
 */
const findHero = async( id ) => {

       const hero = heroes.find(hero => hero.id === id );
        if( !hero )
            throw `Hero with id ${ id } not found`;
       return hero.name;
       //op2 return hero;
}

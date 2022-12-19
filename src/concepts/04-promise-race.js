/**
 * 
 * @param { HTMLDivElement } element 
 */

 export const promiseRaceComponent = ( element ) => {

    element.innerHTML = 'Loading...';

    const renderValue = ( value ) => {
        element.innerHTML = value;
    }

    // Con "Promise.race" el resultado que gana es el que sale en navegador.
    // Los demas sresultados se omiten
    // Race por ejemplo se usa para si tenemos varios endpoints que tengan la misma informacion
    // traer el que obtengamos los resultados mas rapido o por ejemplo varios servidores
    //  y traer el SERVIDOR que tenga menos ping. Todas las promesas se disparan pero solo se muestra 
    // la mas rapida
    Promise.race([
        slowPromise(),
        mediumPromise(),
        mediumPromise(),
        fastPromise()
    ]).then( renderValue );

}

const slowPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 4000)
});
const mediumPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('medium Promise');
    }, 3000)
});
const fastPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 2000)
});



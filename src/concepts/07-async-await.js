/**
 * 
 * @param { HTMLDivElement } element 
 */

export const asyncAwait2Component = async( element ) => {


    console.time();
    // Haciendo de esta form atardaria 4,32 segundos
    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();

    // pero con Promise all tardaria la mitad
    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ]);

    element.innerHTML = `
        value1: ${ value1 } <br/>
        value2: ${ value2 } <br/>
        value3: ${ value3 } <br/>
    
    
    `;
    console.timeEnd()

}

const slowPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000)
});
const mediumPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('medium Promise');
    }, 1500)
});
const fastPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 1000)
});




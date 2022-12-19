import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async(element) => {

    const id = "5d86371fd55e2e2a30fe1cc4";
    // El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
    // ejemplo de map
    // let numbers = [1, 5, 10, 15];
    // let doubles = numbers.map(function(x) {
    // return x * 2;
    // });
    // doubles is now [2, 10, 20, 30]
    // numbers is still [1, 5, 10, 15]

    const heroIds = heroes.map( hero => hero.id );

    const heroPromises = getHeroesAsync( heroIds );
    
    // Arreglo de Promesas
    for await(const hero of heroPromises){
        element.innerHTML += `${ hero.name } <br/>`
    }
    
    



    // if( await getHeroAsync( id ) ){
    //     element.innerHTML = 'Si existe este heroe';
    //     return;
    // }

    // element.innerHTML = 'No existe este heroe';
    
}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */

const getHeroesAsync = (heroIds) => {

    const heroPromises = [];

    heroIds.forEach(id => {
        heroPromises.push(getHeroAsync(id));// Arreglo de promesas 
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise((resolve) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find(hero => hero.id === id);
}
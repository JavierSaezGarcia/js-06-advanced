/**
 * EL AWAIT SIEMPRE VA A ESTAR ENVUELTO EN UNA FUNCION ASINCRONA, NUNCA EN FUNCIONES SINCRONAS
 * 
 * @param { HTMLDivElement } element 
 */

import { heroes } from "../data/heroes";

export const asyncAwaitComponent = async (element) => {

    const id1 = "5d86371f2343e37870b91ef1";
    const id2 = "5d86371f233c9f2425f16916";

    try {
        const hero1 = await findHero(id1); // sin await es una Promesa y devolveria undefined si lo dejamos como esta
        const hero2 = await findHero(id2); //  pero con await es un objeto y podemos hacer un .name o extraer alguna propiedad del objeto
        element.innerHTML = `Hero1: ${ hero1.name } / Hero2: ${ hero2.name }`;

    } catch (error) {
        element.innerHTML = error;

    }


    // podriamos hacerlo desestructurando el objeto que daria lo mismo
    // const {name: name1} = await findHero( id1 );
    // const {name: name2} = await findHero( id2 );
    // element.innerHTML = `${ name1 } /  ${ name2 }`;

}
/*
async function miFuncion() {
    await lo que sea
}
*/

const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
    if (!hero)
        throw `Hero not found`;
    return hero;
}


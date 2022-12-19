/**
 * 
 * @param { HTMLDivElement } element 
 */

import { heroes } from "../data/heroes";

export const generatorsAsyncComponent = async (element) => {

    const heroGenerator = getHeroGenerator();
    let isFinished = false;

    do {
        const { value, done } = await heroGenerator.next();
        isFinished = done;

        if (isFinished) break;

        console.log({ value, done });

        element.innerHTML = value;

    } while (!isFinished);
}

async function* getHeroGenerator() {

    for (const hero of heroes) {
        await sleep(); // esto retardara un segundo en cada una de las emisiones que estoy creando
        yield hero.name;
    }
    return 'No hay mas';

}

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 500);
    })
}



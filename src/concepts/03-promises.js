import { heroes } from "../data/heroes";

export const promiseComponent = ( element ) => {

    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = ( hero1, hero2 ) => {
        element.innerHTML = `
        <h3>${ hero1.name }</h3>
        <h3>${ hero2.name }</h3>
        `
    }
    const renderError = ( error ) => {
        element.innerHTML = `
        <h3>${  error }</h3>
        `
    }

    const id1 = "5d86371f25a058e5b1c8a65e";
    const id2 = "5d86371f9f80b591f499df32";
    // Si son promesas independientes podemos usar promise.all() que es un 
    // array de promesas pero si estas promesas
    // dependen unas de otras pues seria de la forma 2
    Promise.all([
        findHero( id1 ),
        findHero( id2 )
    ])
    .then( ([ hero1, hero2 ]) => renderTwoHeroes( hero1, hero2 ))
    .catch( renderError ) // con que una promesa de error se ejecuta el catch
    
    
    // Forma 2
    // esta forma de promesa es mas eficiente y facil de leer que 
    // la siguiente aunque son equivalentes
    /*
    let hero1,hero2;
    findHero(id1)
        .then( hero => {
            hero1 = hero;
            return findHero(id2);
        }).then( hero2 => {
            renderTwoHeroes( hero1, hero2 );
        })
        .catch( renderError );
    */

    // Forma 1
    // esta es la otra forma mas dificil de leer
    /*
    let hero1,hero2;
    findHero( id1 )
          // .then( superHero ) === .then( superHero => renderHero( superHero ))
        .then( (hero1) => {            
            findHero( id2 )
                .then( (hero2) => {
                    renderTwoHeroes( hero1, hero2 )
                })
       })
       .catch( error => renderError( error ));
    */

}
/**
 * @param { String } id
 * @param { Function } resolve: es una funcion que va a tener el valor producto de mi promesa 
 * @param { Error } reject: es cuando no logramos hacer algo en el pacto establecido
 * @returns { Promise }
*/

const findHero = ( id ) => {

    return new Promise( ( resolve, reject )=> {
         
        const hero = heroes.find(hero => hero.id === id);
        if ( hero ){
            resolve( hero ); // el resolve solo se ejecuta una vez
            return; // este return es para decirle que no siga
            // la funcion seguiría pero no mas resolves
            // resolve( hero2 ) esto no se ejecutaria

        }
        reject(`Hero with ${id} not found `); // esto es cuando no lo encuentra

    });
    
    

    

}







// FUNCIONES GENERADORAS: generan una secuencia de valores en la cual podemos utilizar en diferentes casos

/**
 * 
 * @param { HTMLDivElement } element 
 */

export const generatorFunctionComponent = ( element ) => {

    // console.log('generatorFunctionComponent');
    // const myGenerator = myFirstGeneratorFunction();
    // console.log( myGenerator.next() );
    // console.log( myGenerator.next() );
    // console.log( myGenerator.next() );
    // console.log( myGenerator.next() );
    // console.log( myGenerator.next() );
    
    /*********************************** */

    const genId = idGenerator();

    const button = document.createElement   ('button');
    button.innerText = 'Clicame';
    element.append(button);

    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = `Click ${value}`;

    }

    button.addEventListener( 'click', renderButton )


}

function* idGenerator() {
    let currentId = 0;
    while(true){
        yield ++currentId;
    }
}

function* myFirstGeneratorFunction() {

    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';

    return 'Ya no hay mas valores';
}



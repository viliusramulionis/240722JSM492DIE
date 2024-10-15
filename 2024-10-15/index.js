const validateStrings = (data) => {
    if(!data)
        return false;

    if(data.length < 5) 
        return false;

    if(typeof data === 'string')
        return true;
}

const sayGoodbye = (title, name) => {
    if(!validateStrings(title))
        return false;

    if(!validateStrings(name))
        return false;

    return `Goodbye ${title} ${name}`;
}


// console.log(sayGoodbye('mrs', 'Smith'));
// console.log(sayGoodbye('mrs'));


const sayHello = (title, name) => {
    if(!validateStrings(title) || title === '')
        return false;

    if(!validateStrings(title) || name === '')
        return false;

    if(title === 'mr')
        return `Hello Mr. ${name}`;

    if( title === 'mrs')
        return `Hello Mrs. ${name}`;
}

console.log(sayHello('mr', 'Smith'));
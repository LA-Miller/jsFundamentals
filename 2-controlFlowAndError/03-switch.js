/*
SWITCH STATEMENTS
*/

let friend='Luke';

switch(friend){
    case 'Tom':
        console.log('Hey Tom, when wll you bring bread for me?');
        break;
    case 'Kenn':
        console.log('Hey Kenn');
        break;
    case 'Alex':
        console.log('Hey Alex');
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`);
}

let yep = true;

switch(typeof yep == 'string' || typeof yep == 'boolean'){
    case true:
        console.log('yep is a string or a boolean');
        break;
    default:
        console.log('yep is not a string or a boolean');
}
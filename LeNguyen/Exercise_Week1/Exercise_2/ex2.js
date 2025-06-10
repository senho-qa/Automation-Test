// Exercise 2 : Input a number (1–12) and use a switch-case to print the name of the month. (switch-case)
let month = 13; // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

switch(month) {
    case 1: 
        console.log('January');
        break;
    case 2: 
        console.log('February');
        break;
    case 3: 
        console.log('March');
        break;
    case 4: 
        console.log('April');
        break;
    case 5: 
        console.log('May');
        break;
    case 6: 
        console.log('June');
        break;
    case 7: 
        console.log('July');
        break;
    case 8: 
        console.log('August');
        break;
    case 9: 
        console.log('September');
        break;
    case 10: 
        console.log('October');
        break;
    case 11: 
        console.log('November');
        break;
    case 12: 
        console.log('December');
        break;
    default:
        console.log('Please input month from 1 to 12');
        break;
}
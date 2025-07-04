//Exercise 2

let x = 6 ;
let y = 3 ;
let operator = '/' ;
let result ;

switch(operator)
{
    case '+':
        result = x + y;
        break;
    case '-':
        result = x - y;
        break;
    case '*':
        result = x * y;
        break;
    case '/':
        if( y !== 0)
            {result = x / y;}
        else { result = 'không thể chia cho 0'};
        break;
}
console.log('Đáp án: ' + result);
let action = prompt("What do you want do the action? we have (add, sub, mult, div)")
if(action){
let firstNumber = prompt("please enter the first number")
let secondNumber = prompt("please enter the second number")
if(firstNumber && secondNumber){
switch (action) {
    case 'add':
        alert(firstNumber+''+' + '+''+secondNumber+''+' = '+ firstNumber+secondNumber)
        break;
    case 'sub':
        alert(firstNumber+''+' - '+''+secondNumber+''+' = '+ firstNumber-secondNumber)
        break;
    case 'mult':
        alert(firstNumber+''+' * '+''+secondNumber+''+' = '+ firstNumber*secondNumber)
        break;
    case 'mult':
        alert(firstNumber+''+' / '+''+secondNumber+''+' = '+ firstNumber/secondNumber)
        break;
    default:
        alert('Not correct action')
        break;
}
}else{
    alert("You are cancel!! when you must set you number")
}
}else{
    alert("You are cancel something action or number")
}

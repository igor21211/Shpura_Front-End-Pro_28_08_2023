let answer = true;
while(answer){
let action = prompt("What do you want do the action? we have (add, sub, mult, div)")
if(action){
let firstNumber = prompt("please enter the first number")
let secondNumber = prompt("please enter the second number")
if(firstNumber && secondNumber){
switch (action.toLowerCase()) {
    case 'add':
        alert(firstNumber+' + '+''+secondNumber+''+' = '+ (parseInt(firstNumber)+parseInt(secondNumber)))
        break;
    case 'sub':
        alert(firstNumber+''+' - '+''+secondNumber+''+' = '+ (parseInt(firstNumber)-parseInt(secondNumber)))
        break;
    case 'mult':
        alert(firstNumber+''+' * '+''+secondNumber+''+' = '+ (parseInt(firstNumber)*parseInt(secondNumber)))
        break;
    case 'div':
        alert(firstNumber+''+' / '+''+secondNumber+''+' = '+ (parseInt(firstNumber)/parseInt(secondNumber)))
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
let question = prompt("Do you want more use calculate? yes/no")
if(question === 'no'){
    answer = false;
    alert("good luck!!")
}else if(question === 'yes'){
    
}else{
    alert("Wrong command we determined app calc")
    answer = false;
}
}

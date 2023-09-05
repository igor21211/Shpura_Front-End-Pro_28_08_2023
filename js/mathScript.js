'use strict'

const firstNumber = parseFloat(prompt('Set first number (digits only!)'));
const secondNumber = parseFloat(prompt('Set first number (digits only!)'));
if(secondNumber && !isNaN(firstNumber) && firstNumber && !isNaN(secondNumber)){
    alert(`${firstNumber} + ${secondNumber} = ${firstNumber+secondNumber} \n 
${firstNumber} - ${secondNumber} = ${firstNumber-secondNumber} \n
${firstNumber} * ${secondNumber} = ${firstNumber*secondNumber} \n
${firstNumber} / ${secondNumber} = ${firstNumber/secondNumber}`)
}else{
    alert("Something wrong...")
}


const fistString = prompt("What is your name?");
const secondString = prompt("How Old are you?");
const theeString = prompt("What language of programing do you love?")
//first example
if(fistString || secondString || theeString){
alert(fistString+" "+secondString+" "+theeString);
}
//second example
//if(fistString || secondString || theeString){
//  alert(fistString.concat(secondString).concat(theeString));
// }
//first example
const number = prompt("Set please number with 5 digits")
let array = [...number.toString()].map(Number);
alert(array.toString())

//Second example
const number2 = prompt("Set please number with 5 digits")
let results = number2.toString();
for (let index = 0; index < results.length; index++) {
    const element = results[index];
    alert(element);
}


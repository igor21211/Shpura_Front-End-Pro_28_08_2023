const username = prompt("What is your name?");
const age = prompt("How Old are you?");
const language = prompt("What language of programing do you love?")
//first example
if(username || age || language){
alert(username+" "+age+" "+language);
}
const number3 = prompt("Set please number with 5 digits")
let results2 = number3.toString().split("").join(" ");
if(results2){
    alert(results2)
}

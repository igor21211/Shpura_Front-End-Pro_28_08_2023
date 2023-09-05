'use strict'
const yearOfBirth = parseInt(prompt("Який в тебе рік народження?"))
if(isNaN(yearOfBirth)){
  alert("Шкода, що Ви не захотіли ввести свій(ю) рік народження")
}
const city = prompt("в якому місті ти живеш?");
if(!city || city == null){
  alert("Шкода, що Ви не захотіли ввести свое місто де проживаете")
}
const sport = prompt("Який твій улюбленний вид спорту? (футбол, хокей, бокс)");
if(!sport || sport == null){
  alert("Шкода, що Ви не захотіли ввести свій улюбленний вид спорту");
}

const checkCity = (city) => {
  if(city==='київ'){
    return "Ти живеш у столиці України"
  }else if(city === 'вашингтон'){
    return "Ти живеш у столиці США"
  }else if(city === 'лондон'){
    return "Ти живеш у столиці Великобританії"
  }else {
    return `Ти живеш у ${city}`
  }
}

const checkSport = (sport) => {
  if(sport==='футбол'){
    return "Круто! Хочеш стати як Роналду?"
  }else if(sport === 'хокей'){
    return "Круто! Хочеш стати як Уэйн Гретцки?"
  }else if(sport === 'бокс'){
    return "Круто! Хочеш стати як Тайсон?"
  }else {
    return `Круто! ти напевно хочешь стати чемпионом в  ${sport} виді спорту`
  }
}

if(!isNaN(yearOfBirth) && city && sport){
  alert(`Тобі ${2023 - yearOfBirth} років \n ${checkCity(city.toLowerCase())} \n ${checkSport(sport.toLowerCase())}`)
}else{
  alert("Ви не ввели в одне із полів данні і нажаль ми не можемо сгенерувати вам відповідь")
}
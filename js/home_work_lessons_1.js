'use strict'
const firstName = prompt('What is your name?')
if (firstName !== null && !!firstName) {
	alert(`Hello, ${firstName}! How are you?`)
} else {
	alert('Why you dont want set your name?')
}

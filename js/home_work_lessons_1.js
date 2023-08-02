const firstName = prompt('What is your name?');
if (firstName !== null && firstName.length > 0) {
    alert(`Hello, ${firstName}! How are you?`);
  } else {
    alert("Why you dont want set your name?");
  }

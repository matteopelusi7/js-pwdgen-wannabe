let randomUser = (Math.random()*100).toFixed(0)
console.log(randomUser)

const nameUser = prompt('Come ti chiami?')
console.log(nameUser)

const surnameUser = prompt('Qual è il tuo cognome?')
console.log(surnameUser)

const colorUser = prompt('Qual è il tuo colore preferito?')
console.log(colorUser)

const passwordGenerator = document.getElementById('content')
console.log(passwordGenerator)

passwordGenerator.innerHTML += `${nameUser}${surnameUser}${colorUser}${randomUser}`
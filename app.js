const nameUser = prompt('Come ti chiami?')
console.log(nameUser)

const surnameUser = prompt('Qual è il tuo cognome?')
console.log(surnameUser)

const colorUser = prompt('Qual è il tuo colore preferito?')
console.log(colorUser)

const PasswordGenerator = document.getElementById('content')
console.log(PasswordGenerator)

PasswordGenerator.innerHTML += `${nameUser}${surnameUser}${colorUser}21`
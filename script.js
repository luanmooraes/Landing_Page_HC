//Contagem Regressiva
const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')

// Constante da data atual sendo somada a um
const nextYear = new Date().getFullYear() + 1
//  
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

// Funcao que organiza os numeros do relogio de contagem regressiva
const updateCountdown = () => {
    const currentTime = new Date();
    const difference = newYearTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60/ 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60

    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
    hoursContainer.textContent = hours < 10 ? '0' + hours : hours
    daysContainer.textContent = days < 10 ? '0' + days : days
}

setInterval(updateCountdown, 1000)

// Guardar os dados em LocalStorage
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let email = document.getElementById('email').value

    let data = {
        email
    }
    let convertData = JSON.stringify(data)

    localStorage.setItem('lead', convertData)
})
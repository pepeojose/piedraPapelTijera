let result = document.getElementById('result')
let play = document.getElementById('myPlay')
let machinePlay = document.getElementById('machinePlay')
let userMarkerSpan = document.getElementById('userMarkerSpan')
let pcMarkerSpan = document.getElementById('pcMarkerSpan')
let punctuationUser = 0
let punctuationPc = 0


//Marker

const userMarker = (point) => {
    punctuationUser = punctuationUser + point
    userMarkerSpan.textContent = punctuationUser
}
const pcMarker = (point) => {
    punctuationPc = punctuationPc + point
    pcMarkerSpan.textContent = punctuationPc
}

document.getElementById('btnReset').addEventListener('click', () => {
    punctuationUser = 0
    punctuationPc = 0
    userMarkerSpan.textContent = 0
    pcMarkerSpan.textContent = 0
})

// Machine Play

const choiceMachine = () => {
    let maq = Math.round(Math.random() * (3 - 1) + 1)
    let turnMaq
    if (maq === 1) {
        turnMaq = 'piedra'
        return turnMaq
    }
    if (maq === 2) {
        turnMaq = 'papel'
        return turnMaq
    }
    if (maq === 3) {
        turnMaq = 'tijera'
        return turnMaq
    }
}

document.getElementById('btnSubmit').addEventListener('click', () => {

    let myChoice

    let input_radio2 = document.querySelectorAll('.form-input')
    let inputsRadio = input_radio2.forEach(ele => {
        if (ele.checked) myChoice = ele.value
    })

    let pullMachine = choiceMachine()

    play.innerHTML = `Has elegido ${myChoice}`
    machinePlay.innerHTML = `La máquina ha elegido ${pullMachine}`

    if (myChoice != pullMachine) {
        if (myChoice === 'tijera' && pullMachine === 'papel') {
            result.innerHTML = 'Ganaste'
            userMarker(1)
        } else if (myChoice === 'papel' && pullMachine === 'piedra') {
            result.innerHTML = 'Ganaste'
            userMarker(1)
        } else if (myChoice === 'piedra' && pullMachine === 'tijera') {
            result.innerHTML = 'Ganaste'
            userMarker(1)
        } else {
            result.innerHTML = 'Perdiste'
            pcMarker(1)
        }
    } else result.innerHTML = 'Empate'
    deletePlay()

})

// Delete Play

function deletePlay() {
    setTimeout(() => {
        result.innerHTML = ''
        play.innerHTML = ''
        machinePlay.innerHTML = ''
    }, 4000)
}
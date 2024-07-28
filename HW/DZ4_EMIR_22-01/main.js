const counter = document.querySelector('.counter')
const counterValue = document.querySelector('.counter__number')
const counterButtonPlus = document.querySelector('.counter__button__plus')
const counterButtonMinus = document.querySelector('.counter__button__minus')
const counterButtonClear = document.querySelector('.counter__button__clear')
const mouseCoordinates = document.querySelector('.mouse_coordinates')
const mouseCoordinatesX = document.querySelector('.mouse_coordinates__X_value')
const mouseCoordinatesY = document.querySelector('.mouse_coordinates__Y_value')

let counterNumber = 0

counterButtonPlus.onclick = e => {
    counterNumber++
    counter.style.backgroundColor = 'lime'
    updateCounter()
}

counterButtonMinus.onclick = e => {
    if (counterNumber > 0) {
        counterNumber--
        counter.style.backgroundColor = '#f93c03'
        updateCounter()
    }
}

counterButtonClear.onclick = e => {
    counterNumber = 0
    counter.style.backgroundColor = 'white'
    updateCounter()
}

function updateCounter() {
    counterValue.innerHTML = counterNumber
}


mouseCoordinates.addEventListener('mousemove', e => {
    mouseCoordinatesX.innerHTML = e.screenX
    mouseCoordinatesY.innerHTML = e.screenY
})
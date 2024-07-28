// const color = prompt('Введите цвет')

// class Component {
//     constructor(selector) {
//         this.$element = document.querySelector(selector)
//     }
// }

// class Circle extends Component{
//     constructor(options) {
//         super(options.selector);

//         this.$element.style.width = this.$element.style.height = options.size + 'px'
//         this.$element.style.background = options.color
//         this.$element.style.borderRadius = '50%'
//     }
// }
// const block1 = new Circle({
//     selector: '#block1',
//     size: 200,
//     color: 'silver'
// })
// const block2 = new Circle({
//     selector: '#block2',
//     size: 200,
//     color: 'silver'
// })

// const block3 = new Circle({
//     selector: '#block3',
//     size: 200,
//     color: 'silver'
// })

// if (color === 'зеленый') {
//     block1.$element.style.background = 'green'
// } else if (color === 'желтый') {
//     block2.$element.style.background = 'yellow'
// } else if (color === 'красный') {
//     block3.$element.style.background = 'red'
// }


let inputColor = document.querySelector('.input_color')
let buttonEnter = document.querySelector('.enter')
let buttonClear = document.querySelector('.clear')


class Circle {
    constructor(options) {
        this.$element = document.querySelector(options.selector)
        this.$element.style.width = this.$element.style.height = options.size + 'px'
        this.$element.style.borderRadius = '50%'
        this.$element.style.background = options.color
    }
}

const green = new Circle({
    selector: '#green',
    size: 200,
    color: 'silver'
})

const yellow = new Circle({
    selector: '#yellow',
    size: 200,
    color: 'silver'
})

const red = new Circle({
    selector: '#red',
    size: 200,
    color: 'silver'
})

function resetColors() {
    green.$element.style.background = 'silver'
    yellow.$element.style.background = 'silver'
    red.$element.style.background = 'silver'
}


function colorsFor(color, green, yellow, red) {
    resetColors()

    if (color === 'зеленый' || color === 'green') {
        green.$element.style.background = 'green'
    } else if (color === 'желтый' || color === 'yellow') {
        yellow.$element.style.background = 'yellow'
    } else if (color === 'красный' || color === 'red') {
        red.$element.style.background = 'red'
    } else {
        alert('Ошибка! Введите текст правильно!')
    }
}

buttonEnter.onclick = () => colorsFor(inputColor.value, green, yellow, red)

buttonClear.onclick = () => resetColors()

inputColor.addEventListener('keydown', e => {
    e.code === 'Enter' ? colorsFor(inputColor.value, green, yellow, red) : false
})
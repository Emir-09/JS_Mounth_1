// ООП

// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true,
//     number: 10,
// }

// console.log(animal); 

// const animal1 = new Object({
//     name: 'Animal',
//     age: 5,
//     hasTail: true,
//     number: 10,
// })

// console.log(animal1);


// class Animals {
//     static type = 'ANIMAL'

//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }
//     voice() {
//         console.log('I am animal');
//     }
// }


// const animal = new Animals ({
//     name: 'Animal',
//     age: 3,
//     hasTail: true,
//     eyaColor: 'any'
// })

// // console.log(animal);
// // animal.voice()
// // console.log(animal.voice); 


// class Wolfs extends Animals {
//     constructor(options) {
//         super(options)
//         this.hasFang = options.hasFang
//         this.eyaColor = options.eyaColor
//     }

//     voice() {
//         console.log(`I am ${this.name}`);
//     }

//     get ageInfo() {
//         return console.log(this.age * 6 + ' Человечиских лет');
//     }

// }


// const wolf = new Wolfs({
//     name: 'Akella',
//     age: 9,
//     hasTail: false,
//     hasFang: true,
//     eyaColor: 'red'
// })

// const wolf2 = new Wolfs({
//     name: 'Shram',
//     age: 9,
//     hasTail: false,
//     hasFang: true,
//     eyaColor: 'red'
// })


// wolf.ageInfo
// wolf.voice()
// wolf2.voice()


class Component {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }

    hide() {
        this.$element.style.display = 'none'
    }

    show() {
        this.$element.style.display = 'block'
    }
}


class Block extends Component {
    constructor(options) {
        super(options.selector)

        this.$element.style.width = this.$element.style.height = options.size + 'px'
        this.$element.style.background = options.color
    }
}


const block1 = new Block({
    selector: '#block1',
    size: 150,
    color: 'green',
})
const block2 = new Block({
    selector: '#block2',
    size: 150,
    color: 'red',
})


class Circle extends Block {
    constructor(options) {
        super(options)
        this.$element.style.borderRadius = '50%'
    }
}

const circle = new Circle({
    selector: '.circle',
    size: 90,
    color: 'silver'
})

circle.hide()
circle.show()
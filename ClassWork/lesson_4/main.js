// DOM

// console.log(document);

// window.alert('Hello')

// console.log(window);

// document.body.style.backgroundColor = 'red'


// document.body.setAttribute('class', 'wrapper')

// const block = document.getElementsByClassName('block')

// block[0].style.backgroundColor = 'green'

// console.log(block[0]);

// const block = document.getElementById('block')
// // console.log(block) 

// block.style.width = '50px'
// block.style.height = '50px'
// block.style.backgroundColor = 'blue'

// const blockClass = document.querySelector('.block')
// const blockId = document.querySelector('#block')
// console.log(blockClass)
// console.log(blockId)

// const button = document.querySelector('button')

// button.addEventListener('click', (event) => {
//     console.log(event);
// })

// const posX = document.getElementById('posX')
// const posY = document.getElementById('posY')

// window.addEventListener('mousemove', event => {
//     posX.innerHTML = event.screenX
//     posY.innerHTML = event.screenY
// })


// const buttons = document.querySelectorAll('.button')


// for (button of buttons) button.onclick = e => document.body.style.backgroundColor = e.target.innerText

// const event = e => {
//     document.body.style.backgroundColor = e.target.innerText
// }

// for (let button of buttons) {
//     button.addEventListener('click', event)
// }


// Методы массива

// filter()

// const fruits = ['apple', 'pineapple', 'peach', 'grape', 'qwertyu']

// console.log(fruits);

// const result = fruits.filter(fruit => {
//     return fruit.length > 5
// })

// console.log(result);

// map()  

// const numbers = [1, 2, 3, 5, 8, 13, 21]

// console.log(numbers);

// const result = numbers.map(item => {
//     return item * 2
// })

// console.log(result);

// forEach()

// const numbers = [2, 34, 56, 89, 'gg', '54rt', false]

// console.log(numbers);

// let count = 0 
// numbers.forEach(element => {
//     console.log(element);
//     count++
// })

// console.log(`Количество элементов в массиве равна ${count}`);

// numbers.forEach((value, index, array) => array[index] = value * 2)
// console.log(numbers);

// slice()

// const animals = ['and', 'bison', 'camel', 'duck', 'elephant']

// let sliceAnimal = animals.slice(2, 4)

// console.log(sliceAnimal)
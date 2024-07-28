// Функции - Function


// Function declarection

// function calculate(a, b) {
//     return console.log(a, b)
// }

// calculate(40, 15)



// Function expression

// const claculate = function (a, b) {
//     return console.log(a - b)
// }

// claculate(30, 15)



// Arrow Function

// const sayHi = () => {
//     console.log('hi')
// }

// sayHi()



// Lambda Function

// const sayHi = () => console.log('hi')

// sayHi()



// Замыкания

// function init() {
//     var name = prompt("Введите имя: ")
//     const displayName = () => console.log(name)
//     displayName()
// }

// init()



// Рекурсия

// var userAge = Number(prompt('Введите возраст: '))

// var age = (userAge) => {
//     if (userAge >= 18) {
//         console.log('OKAY')
//     } else if (userAge < 18) {
//         console.log('NOT OKAY')
//     } else {
//         console.log('ERROR')
//     }
//     // age(userAge)
// }

// age(userAge)


// var userAge = Number(prompt('Введите возраст: '))

// var ageFunc = (text) => alert(text)

// if (userAge >= 18) {
//     ageFunc('Разрешено')
// } else {
//     ageFunc('Меньше 18 нельзя!')
// }

// let numA = Number(prompt('Вести 1 число: '))
// let symbol = prompt('Вести (+, -, *, /): ')
// let numB = Number(prompt('Вести 2 число: '))

// const clac = (a, c, b) => {
//     let math = a + c + b
//     console.log(eval(math))
// }

// clac(numA, symbol, numB)

 
// const name = 'Emir'

// function global() {
//     const name = 'Ilya'
//     return console.log(name)
// }

// global()

// console.log(name);


// const good = () => {
//     console.log('Emir');
// }

// setInterval(good, 1000)


// setInterval( () => console.log('Emir'), 100)


// var sec = 0

// setInterval( () => {
//     sec++
//     document.write(' ' + sec)
// }, 1000)
// console.log('Hello world')
// console.log(1 + 1)
// variable - переменная

// var name = 'SkarpiX'
// console.log(name)

// var Number - не стоит лсоздавать переменные с заглавных букв

// var 1num

// Типы данных
// Примитивные:

// var number = 42 // number
// var someWorld = 'Hello I am SkarpiX' // string
// var hasHair = false // boolean
// var isMarried = true // boolean
// var und // undefined
// var none = null // null

// console.log(false + false)
// console.log(true + true)
// console.log(none)

// Не прнимитивные типы данных (ссылочные)

// Array - Массив
// ES6
// var arr = [1, 2, 3, 4, 5]
// console.log(arr[4])


// ES5
// var arr1 = new Array(1, 2, 3, 4, 5)
// console.log(arr1)

// object - объект

// ES6
// var person = {
//     name: "Emir",
//     age: 16,
//     address: {
//         street: 'wall street'
//     },
//     ['num']: [2, 4, 6],
//
// }
//
// var arr = [1, 2, 3, 4]
//
// console.log(arr)
// console.log(typeof arr)

// console.log(typeof person)
// console.log(Object)

// console.log(person)
// console.log(person.name)
// console.log(person.address.street)
// console.log(person.num)
// console.log(person['num'])
// console.log(person['address'])


// ES5

// var obj = new Object({
//     name: 'Emir',
//     age: 16,
// })
//
// console.log(obj)

// Операторы (Математические, Условия)

// console.log(40 + 2)
// console.log(40 - 2)
// console.log(40 * 2)
// console.log(40 / 2)


// console.log(40 < 2)
// console.log(40 > 2)

// console.log(40 >= 2)
// console.log(40 <= 2)

// console.log('100' === 100) // строгое

// console.log('100' == 100) // не строгое



// Логические операторы

// console.log(true && true) // логические "И"

// console.log(true || true) // логическое "ИЛИ"

// Улсловные конструкции if, if else, else

// if (1000 > 100) {
//     console.log('Больше')
// }

// alert('hello')
// answer = confirm('hello')
//
// console.log(answer)

// document.write(3333)

// prompt('write someone')

// var age = Number(prompt('Введите имя'))
// var name = prompt('Введите имя')

// document.write(age)

// if (age >= 18 && age < 50) {
//     alert('вход разрешен')
// } else if (age < 18) {
//     alert('вход запрешен')
// } else if (age > 49) {
//     alert('Ты стар для этого')
// } else {
//     alert('Введи возраст!')
// }


// условная конструкция swich case

var age = Number(prompt('Введите имя'))
switch (age) {
    case age > 18:
        alert('вход разрешен')
        break
    case 50:
        alert('Ты стар для этого')
        break
    default:
        alert('Вводи возраст!')
        break
}



















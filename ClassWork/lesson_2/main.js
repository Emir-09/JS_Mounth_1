// var user = {
//     pass: '12345',
//     name: 'Emir',
//     age: 15
// }

// конкантинация чисел
// console.log('Пароль: ' + user.pass)
// console.log('Имя: ' + user.name)
// console.log('Возраст: ' + user.age)


// Переопределение переменных

// console.log(num1)
// var num1 = 12
// // num = 40
//
// let num2 = 10
// num2 = 100
//
// const numberStr = '123456'
// numberStr ='654321'

// Циклы

// 1. while

// let count = 0
//
// while (count < 10) {
//     // console.log(count += 1)
//     // console.log(count++)
//     // console.log(count = count + 1)
// }

// for

// let arr = [1, 2, 3, 4, 5]
// console.log(arr)
//
// for (let item = 0; item < arr.length; item++) {
//     console.log(arr[item])
// }


// let arr = []
// // arr.push(1)
// // console.log(arr)
//
// for (let i = 1; i <= 100; i++) {
//     console.log(i)
// }

// Циклы for of не работать с пустыми масивами

// var arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr)
//
// for (let item of arr) {
//     console.log(Math.pow(item, 3))
// }

// for (let i of arr) {
//     if (i === Number(i)) {
//         console.log(i)
//     }
//     // console.log(i)
// }


// 5. for in

// let obj = {
//     string: 'some str',
//     number: 42,
//     'key': false,
//     [null]:{
//         name: 'Emir'
//     },
//     sayHi() {
//         console.log('Hi')
//     }
// }
//
// console.log(obj[null])
//
// // console.log(obj.null.name)
// // obj.sayHi()
// // console.log(obj.sayHi())
//
// // интерпаляция строк
// // '' "" ``
// for (let key in obj) {
//     console.log(`Ключ: ${key}, Значение: ${obj[key]}`)
// }


// let arr = ['a', 'b', 'c', 'd']
// console.log(arr)

// метод push() добавит обект в конце массива
// arr.push('e')
// console.log(arr)

// метод unshift() добавить элемент в начало массива
// arr.unshift('e')
// console.log(arr)

// метод pop() удалит элемент с конца массива
// arr.pop()
// console.log(arr)

// метод shift() удалит элемент с конца массива
// arr.shift()
// console.log(arr)


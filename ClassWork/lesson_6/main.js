// ES5

// a = 19
// console.log(a);

// console.log(num);
// var num = 10


// ES6 

// let l = 10
// l = 'num'
// console.log(l);

// const c = 0


// if (true) {
//     let a = 12
// }

// console.log(a);


// hoisting


// function hoisted() {
//     age = 20
// }

// hoisted()
// let age = 20 
// console.log(age);

// const color = '#fff'
// color = '#000'

// const arr = ['#fff', '#000']
// console.log(arr);
// arr[1] = '#222'
// arr.push('#eee')
// console.log(arr);

// const num = 5
// const num2 = num + 15

// console.log(num);
// console.log(num2);


// num str null NaN bool undefined
// obj arr - obj сылочные


// const obj = {
//     name: 'Emir',
//     age: 16
// }
// const obj2 = { ...obj }

// obj2.name = 'Smit'

// console.log(obj);
// console.log(obj2);

// console.log(obj);
// obj.name = 'Nurdin'
// console.log(obj);


// function sum(a = 0, b = 0) {
//     return console.log(a + b);
// }

// sum()


// const num = (a= 0, b = 0) => console.log(a + b);
// num(12, 30)


// Context

// console.log(this);

// const arrow = () => console.log(this);

// function log() {
//     console.log(this);
// }


// const person = {
//     name: 'Emir',
//     age: 19,
//     log: log,
//     arrow: arrow,
//     delayLog: function () {
//         console.log(`name: ${this.name}, age: ${this.age}`);
//     }
// }

// const person = {
//     name: 'Emir',
//     age: 19,
//     log: log,
//     arrow: arrow,
//     delayLog: function () {
//         const self = this
//         setTimeout( function () {
//             console.log(`name: ${self.name}, age: ${self.age}`);
//         }, 0)
//     }
// }


// person.delayLog()
// person.log()


// let num = 33
// let num2 = 44

// setInterval(() => console.log(num), 1000)
// setTimeout(() => console.log(num2), 1000)

// const name = 'Mirlan'

// const google = {
//     name: 'Emir',
//     obj: {
//         this: this
//     },
//     hell: function () {
//         console.log(this.name);
//         const gg = function () {
//             this
//         }
//     }
// }

// google.hell()

// function good() {
//     const notGood = () => {
//         this
//     }
//     notGood()
// }
// good()
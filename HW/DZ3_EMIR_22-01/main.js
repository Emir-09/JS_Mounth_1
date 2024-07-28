// const numberOneForComparison = Number(prompt('Ведите первое число: '))
// const numberTwoForComparison = Number(prompt('Ведите второе число: '))

// function comparisonTwoNumbersFunction(firstNumber, secondNumber) {
//     if (firstNumber > secondNumber) {
//         return console.log(`Второе число меньше чем первый:
//             ${firstNumber} > ${secondNumber}`)
//     } else {
//         return console.log(`Первое число меньше чем второй:
//             ${secondNumber} > ${firstNumber}`)
//     }
// }

// comparisonTwoNumbers(numberOneForComparison, numberTwoForComparison)


// const textForLengthMeasurement = prompt('Введите текст: ')

// function stringLengthMeasurementFunction(textForLengthMeasurement) {
//     let lengthTextForLengthMeasurement = 0
//     for (let i = 0; i < textForLengthMeasurement.length; i++) {
//         lengthTextForLengthMeasurement++
//     }
//     return console.log(lengthTextForLengthMeasurement)
//     // return console.log(textForLengthMeasurement.length)
// }

// stringLengthMeasurementFunction(textForLengthMeasurement)


const firstNumberForCalculation = Number(prompt('Ведите первое число для вычесления: '))
const symbolForCalculation = prompt('Символ для вычесления(+, -, *, /): ')
const secondNumberForCalculation = Number(prompt('Ведите второе число для вычесления: '))

function calculateTwoNumbersFunction(firstNumber, symbolForCalculation, secondNumber) {
    let result = 0
    // if (symbolForCalculation === '+') {
    //     result = firstNumber + secondNumber
    // }
    // else if (symbolForCalculation === '-') {
    //     result = firstNumber - secondNumber
    // }
    // else if (symbolForCalculation === '*') {
    //     result = firstNumber * secondNumber
    // }
    // else {
    //     result = firstNumber / secondNumber
    // }

    switch(symbolForCalculation){
        case '+':
            result = firstNumber + secondNumber
            break
        case '-':
            result = firstNumber - secondNumber
            break
        case '*':
            result = firstNumber * secondNumber
            break
        case '/':
            result = firstNumber / secondNumber
            break
    }
    return console.log(result)
}

calculateTwoNumbersFunction(firstNumberForCalculation, symbolForCalculation, secondNumberForCalculation)
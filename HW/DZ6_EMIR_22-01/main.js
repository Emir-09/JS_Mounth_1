const textReversedBlock = document.querySelector('#reverse_text')
const createButton = document.querySelector('.create_button')
const input = document.querySelector('.text')


let arrayText = []

function createReversText() {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const text = input.value
        arrayText.push(text)
        arrayText.forEach(str => {
            let reversedText = str.split('').reverse().join('')
            let h3 = document.createElement('h3')
            h3.append(reversedText)
            textReversedBlock.prepend(h3)
        })
    }
}


createButton.addEventListener('click', createReversText)
input.addEventListener('keydown', (event) => event.code === 'Enter' ? createReversText() : false)
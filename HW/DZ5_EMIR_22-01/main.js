const input = document.querySelector('#input')
const createButton = document.querySelector('#create_todo')
const todoList = document.querySelector('.todo_list')


const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('p')
        const buttonsDiv = document.createElement('div')
        const deleteButton = document.createElement('button')
        const editButton = document.createElement('button')

        div.setAttribute('class', 'block_text')
        text.setAttribute('class', 'text')
        buttonsDiv.setAttribute('class', 'buttons_div')
        deleteButton.setAttribute('class', 'delete_button')
        editButton.setAttribute('class', 'edit_button')

        text.innerText = input.value
        deleteButton.innerText = 'DELETE'
        editButton.innerText = 'EDIT'

        div.append(text)
        div.append(buttonsDiv)
        buttonsDiv.append(deleteButton)
        buttonsDiv.append(editButton)
        todoList.prepend(div)

        deleteButton.onclick = () => {
            const answer = confirm('Вы уверены что хотите удалить этот заметок?')
            answer === true ? todoList.removeChild(div) : false
        }

        editButton.onclick = () => {
            const editedText = prompt('Введите изменения на: ' + text.innerText)
            editedText !== null && editedText.trim() !== '' ? text.innerText = editedText : false
        }
    }
    input.value = ''
}


createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', (event) => event.code === 'Enter' ? createTodo() : false)
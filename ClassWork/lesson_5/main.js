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
        deleteButton.innerText = 'Delete todo'
        editButton.innerText = 'Edit todo'

        div.append(text)
        div.append(buttonsDiv)
        buttonsDiv.append(deleteButton)
        buttonsDiv.append(editButton)
        todoList.prepend(div)
    }
    input.value = ''
}

createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', (event) => {
    // if (event.code === 'Enter') {
    //     createTodo()
    // }
    event.code === 'Enter' ? createTodo() : false
})
import html from "../core.js";


function Header() {
    window.addTodo = () => {
        dispatch('add', document.querySelector('.new-todo').value.trim())
    }
    return html`
        <header class="header">
            <h1>todos</h1>
            <input
                class="new-todo"
                placeholder="What needs to be done?" 
                autofocus
                onkeyup="event.keyCode == 13 && dispatch('add', this.value.trim())"
            />
            <i class="fa-solid fa-circle-plus" onclick="addTodo()"></i>
        </header>
    `
}

export default Header;
const todoInput = document.getElementById("todoInput")
const addBtn = document.getElementById("addBtn")
const todoList = document.getElementById("todoList")
const clearAll = document.getElementById("clearAll")
const searchInput = document.getElementById("searchInput")

function createTodoItem(text) {
  const li = document.createElement("li")
  li.className = "todo-item"

  const span = document.createElement("span")
  span.textContent = text

  const actions = document.createElement("div")
  actions.className = "todo-actions"

  const editBtn = document.createElement("button")
  editBtn.textContent = "Edit"
  editBtn.onclick = () => {
    const newText = prompt("Edit tugas:", span.textContent)
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText
    }
  }

  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "Hapus"
  deleteBtn.onclick = () => li.remove()

  actions.append(editBtn, deleteBtn)
  li.append(span, actions)
  return li
}

addBtn.onclick = () => {
  const text = todoInput.value.trim()
  if (text === "") return
  todoList.appendChild(createTodoItem(text))
  todoInput.value = ""
}

clearAll.onclick = () => {
  todoList.innerHTML = ""
}

searchInput.oninput = (e) => {
  const term = e.target.value.toLowerCase()
  document.querySelectorAll(".todo-item").forEach((item) => {
    const match = item.textContent.toLowerCase().includes(term)
    item.style.display = match ? "" : "none"
  })
}

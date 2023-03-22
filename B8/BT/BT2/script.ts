class Todo {
    date: number
    works: string []
    constructor(date: number, works: string []) {
        this.date = date
        this.works = works
    }
}
class TodoList {
    todoList: Todo[] = []
    constructor() {
        this.todoList = []
    }
    addTodo(todo: Todo) {
        const index = this.todoList.findIndex((item) => item.date === todo.date)
        if (index === -1) {
            this.todoList.push(todo)
            console.log(`Ngay ${todo.date} co cong viec: ${todo.works}`);
        } else {
            console.log(`Cong viec ${todo.works} bi trung ngay`);
        }
    }
}

let todoList = new TodoList()
let todo1 = new Todo(22, ['Studying', ' Meeting'])
let todo2 = new Todo(23, ['Shopping', ' Party'])
let todo3 = new Todo(24, ['Camping', ' Fishing'])

todoList.addTodo(todo1)
todoList.addTodo(todo2)
todoList.addTodo(todo3)

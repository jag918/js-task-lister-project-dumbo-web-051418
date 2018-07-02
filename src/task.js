class Task {

  constructor(listId, description,priority) {
    this.listId = listId
    this.desc = description;
    this.priority=priority
  }

  // findAll() {
  //   return [...allTasks]
  // }

  createTask() {
    const lists = List.findAll()
    debugger
    lists.filter(this,(list)=>{
      return this.listId === list.id
    })

    return `<li>
        Task: ${this.desc}
        <button data-list-title="${this.title}" data-task-name="${this.desc}" class="delete-task">
            X
        </button>
        <br>
        Priority: ${this.priority}
      </li>`

  }

}


// <li>
// Task: mocha
// <button data-list-title="doughnuts" data-task-name="mocha" class="delete-task">
//     X
// </button>
// <br>
// Priority: low
// </li>

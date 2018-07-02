document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");

  // const app = new TaskLister();

  const createList = document.querySelector("#create-list-form")
  const createButton = document.querySelector('#create-task-form')
  const newListInput = document.querySelector("#new-list-title")
  const listsList = document.querySelector('#parent-list')
  let listInstance = document.querySelector('.lists')

  createList.addEventListener('submit', (e) => {
    // prevent page refresh
    e.preventDefault()

    // show task creater form for list
    createButton.style.display = 'block'

    // add new list to drop down
    // newList is for dropdown
    const newList = document.createElement('option')
    const node = document.createTextNode(newListInput.value)
    newList.appendChild(node)
    listsList.appendChild(newList)

    // create a list instance
    // create a div for the list instance and show on page
    newListElement = new List(newListInput.value)
    const newListDiv=document.createElement("div")
    newListDiv.innerHTML += newListElement.createList()

    // add data-id to the drop down selection
    newList.dataset.id = newListElement.listId

    // reset input field
    // newListInput.value = ""

      // const node2 = document.createTextNode(newListElement.createList())
      // newListDiv.appendChild(node2)
      newListDiv.dataset.id = newListElement.listId
      listInstance.appendChild(newListDiv)
      // listInstance.innerHTML += newListElement.createList()

      //newListElement iML += newListElement.createList()


  })

  createButton.addEventListener("submit", (e)=>{
    e.preventDefault()

    // find the list for this task
    let listOfLists = document.querySelectorAll('option')
    listOfLists = Array.from(listOfLists)
    let selectedList = listOfLists.filter((list) => {
      return list.selected === true
    })
    selectedList = selectedList[0]
    const listId = selectedList.dataset.id

    //create the task
    const findDesc = document.getElementById('new-task-description')
    const findPriority = document.getElementById('new-task-priority')
    const newTask = new Task(listId, findDesc, findPriority)

    newTask.createTask()


    // const findListInstance = document.querySelector()

    // const node = document.createTextNode(findDesc.value)
    // listInstance.appendChild(node)

  })


});

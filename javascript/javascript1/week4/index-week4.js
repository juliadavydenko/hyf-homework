

let userName = "";
let todoList = [];


function getReply(command) {

  if(command.includes("my name is"))
    return gretting(command)

  if(command.includes("What is my name"))
    return tellUserName()

  if(command.includes("add") && command.includes("todo"))
    return addToTodo(command)

  if(command.includes("remove") && command.includes("todo"))
    return removeTodo(command)

  if(command.includes("what is") && command.includes("my todo")){
    let user = getUser(activeUserName)
    return user.todo
  }
  if(command.includes("day") && command.includes("today"))
   return dateToday()

  if(command.includes("what is"))
  return calc(command)

  if(command.includes("timer"))
  return timer(command)
  else {
    return "Could you repeat that please?"
  }

  function greeting(command) {
    let name = getName(command);
    if(hasUser(name)){
      return `User ${name} already exists`
    } else {
      newUser(name)
      return 'Nice to meet you ${name}'
    }
  }

  function tellUserName() {
    if(activeUserName) {
      return activeUserName
    } else {
      return "Please tell us your name first, and we promise to remember it"
    }
  }

function getName(command) {
  if(userName === "") {
    return "You haven't mentioned your name yet!"
  } else {
    return `${name}`
  }
}

function addToDo(command) {
  if(todolist.includes(todo)) {
    return "It's already there"
  } else {
    todoList.push(todo)
    return `${todo} added to your list`
  }
  }

function removeTodo(todo){
  if(todoList.length === 0) {
    return "Nothing to do"
  } else if(!todoList.includes(todo)) {
    return "It even wasn't there"
  } else if(todoList.includes(todo)) {
    let index = todoList.indexOf(todo)
    return `Item ${todo} successfully removed from your list`
  }
  }

function getTodo() {
  if(todoList.length === 0) {
    return "Your list is empty"
  } else {
    return todoList
  }
}

function getDate() {
  const date = newDate()
  const day = date.getDate()
  const month = date.toLocaleString("en-US", { month: long })
  const year = date.getFullYear()

  return `${day}` of ${month} ${year}
}

function calculation(command) {
  const count = command.toLowerCase().slice(7)
  return eval(count)
}

function setTimer(command) {
  const //i gave up on this one, it's about setting Timing Events, i thought of setting the loop to countdown...
}

getReply(command)

/*-Commits:
added an html file
-changed mistake in 'greeting'
-
-
-changed dateToday() for getDate()
-added missing closing braces for the function getReply "}"
-changed activeUsername for userName
-changed 'todolist' for 'todoList'
-changed 'command' for 'todo'
-added todoList.splice(index, 1) to remove the item
-added missing sign in "return `${day} of ${month} ${year}`"
-changed function getDate for another one
-changed setTimer function
-tried to change the calculate function, but I don't completele understand how to use it in this case with regex and parseInt
-passed a string instead of command to getReply function


*/

let userName = "";
let todoList = [];


function getReply(command) {

  if (command.includes("my name is"))
    return greeting(command)

  if (command.includes("What is my name"))
    return tellUserName()

  if (command.includes("add") && command.includes("todo"))
    return addToTodo(command)

  if (command.includes("remove") && command.includes("todo"))
    return removeTodo(command)

  if (command.includes("what is") && command.includes("my todo")) {
    let user = getUser(userName)
    return user.todo
  }
  if (command.includes("day") && command.includes("today"))
    return getDate()

  if (command.includes("what is"))
    return calc(command)

  if (command.includes("timer"))
    return timer(command)
  else {
    return "Could you repeat that please?"
  }
}

  function greeting(command) {
    let name = getName(command);
    if (hasUser(name)) {
      return `User ${name} already exists`
    } else {
      newUser(name)
      return 'Nice to meet you ${name}'
    }
  }

  function tellUserName() {
    if (userName) {
      return userName
    } else {
      return "Please tell us your name first, and we promise to remember it"
    }
  }

  function getName(command) {
    if (userName === "") {
      return "You haven't mentioned your name yet!"
    } else {
      return `${name}`
    }
  }

  function addToDo(todo) {
    if (todoList.includes(todo)) {
      return "It's already there"
    } else {
      todoList.push(todo)
      return `${todo} added to your list`
    }
  }

  function removeTodo(todo) {
    if (todoList.length === 0) {
      return "Nothing to do"
    } else if (!todoList.includes(todo)) {
      return "It even wasn't there"
    } else if (todoList.includes(todo)) {
      const index = todoList.indexOf(todo)
      todoList.splice(index, 1)
      return `Item ${todo} successfully removed from your list`
    }
  }

  function getTodo() {
    if (todoList.length === 0) {
      return "Your list is empty"
    } else {
      return todoList
    }
  }

function getDate() { const date = new Date(); const day = date.getDate(); const month = date.toLocaleString("en-US", { month: "long" }); const year = date.getFullYear();
return `${day} of ${month} ${year}`
                   }

  /*previous function
  function getDate() {
    const date = newDate()
    const day = date.getDate()
    const month = date.toLocaleString("en-US", {
      month: long
    })
    const year = date.getFullYear()

    return `${day} of ${month} ${year}`
    }
  }
  */
-
  /*
  old function
  function calculation(command) {
    const count = command.toLowerCase().slice(7)
    return eval(count)
  }*/

//setTimer function
` let neededMinutes = command.match(/\d+/g);
neededMinutes = parseInt(neededMinutes);

    function timerDone() {
        console.log("Timer done");
    }

    setTimeout(timerDone, neededMinutes * 60 * 1000);`

/*old function
  function setTimer(command) {
    const //i gave up on this one, it's about setting Timing Events, i thought of setting the loop to countdown...
  }
*/
  getReply("My name is Steve")

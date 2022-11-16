const submitButton = document.getElementById("btnSubmit");
const tasks = document.getElementById("tasks");
const messageElement = document.getElementById("message");
const clearList = document.getElementById("btnClear");
tasks.addEventListener("click", clickStyle);
submitButton.addEventListener("click", clickHandler);
clearList.addEventListener("click", stergereLista);

displayMessage("Have a nice day!");

function stergereLista() {
  const clickStergere = tasks.getElementsByClassName("list-group-flush");
  while (clickStergere.length > 0) {
    clickStergere[0].parentNode.removeChild(clickStergere[0]);
  }
}

function clickHandler() {
  const taskList = document.getElementById("newTask");
  if (isValid(taskList.value)) {
    tasks.innerHTML +=
      '<li class="list-group-flush">' + taskList.value + "</li>";
    taskList.value = "";
    messageElement.style.visibility = "hidden";
  } else {
    displayMessage("Please, add a treatment..");
  } 
  
}

function isValid(input) {
  if (input) {
    return true;
  }
  return false;
}

function displayMessage(message) {
  messageElement.innerText = message;
  messageElement.style.visibility = "visible";
}

function clickStyle(event) {
  const style = event.target.style;
  if (!style.textDecoration) {
    style.textDecoration = "line-through";
  } else {
    style.textDecoration = "";
  }
}

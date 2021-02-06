document.addEventListener("DOMContentLoaded", () => {
  // your code here 
  
  document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    newTask = getTask();
    addTaskToList(newTask);
    clearField()
  })

  document.getElementById("tasks").addEventListener("click", function(event){
    let task = event.target
    console.log(task)
    task.parentNode.removeChild(task)
  })

});

function getTask(){
  let task = document.getElementById("new-task-description");
  return task.value
}

function addTaskToList(task){
  let list = document.getElementById("tasks")
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(task));
  list.appendChild(li)
}

function clearField() {
  let input = document.getElementById("new-task-description")
  input.value = ""
}
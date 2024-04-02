const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const tasksContainer = document.querySelector(".tasks-container");


//validação Input
const validateInput = () => inputElement.value.trim().length > 0;

//Criar Tarefas
const handleAddTask = () => {

  const inputIsValid = validateInput();

  console.log(inputIsValid);

  if (!inputIsValid) {
    return inputElement.classList.add("error");
  }

  const taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("task-item");

  const taskContent = document.createElement("p");
  taskContent.innerText = inputElement.value;

  const deleteItem = document.createElement("div");
  deleteItem.innerHTML = "Apagar";

  //Evente listener responsabel pelo processo de risco da task
  taskContent.addEventListener("click", () => handleClick(taskContent));

  //Evente listener responsável pelo processo de apagar
  deleteItem.addEventListener("click", () => handleDeleteClick(taskItemContainer, taskContent));

  taskItemContainer.appendChild(taskContent);
  taskItemContainer.appendChild(deleteItem);
  tasksContainer.appendChild(taskItemContainer);

  //Rtirando o texto da tarefa do Input
  inputElement.value = "";
};

// Parte Da Função de Riscar ------------------------------------------------------------------
const handleClick = (taskContent) => {
  const tasks = tasksContainer.childNodes;

  for (const task of tasks) {
    const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent);

    if (currentTaskIsBeingClicked) {
      task.firstChild.classList.toggle("completed");
    }
  }
};

//Parte Do "Apagar" em que todo o item container daquela task é removido após o evento click -------------------------------------
const handleDeleteClick = (taskItemContainer, taskContent) => {
  const tasks = tasksContainer.childNodes;

  for (const task of tasks) {
    const currentTaskIsBeingClicked = task.firstChild.isSameNode(taskContent);

    if (currentTaskIsBeingClicked) {
      taskItemContainer.remove();
    }
  }
};

//Parte relacionada a remoção da classe que mostra a partir da cor vermelha o erro na validação ou seja ausencia de conteudo no input
const handleInputChange = () => {
  const inputIsValid = validateInput();

  if (inputIsValid) {
    return inputElement.classList.remove("error");
  }
};

//todos os event listerner que vou precisar
addTaskButton.addEventListener("click", () => handleAddTask());
inputElement.addEventListener("change", () => handleInputChange());

// alert logout 
function logout() {
  alert('Logout efetuado com sucesso.')
  location.href = "index.html";
}
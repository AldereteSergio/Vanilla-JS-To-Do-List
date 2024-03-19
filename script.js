function addItem() {
  const taskInput = document.querySelector(".task-input");
  const taskDescription = document.querySelector(".task-description");
  const upperItem = document.querySelector(".upper-item");
  const newItem = document.createElement("li");
  const newSpan = document.createElement("span");
  const newDescription = document.createElement("a");
  const newDiv = document.createElement("div");
  const newEditButton = document.createElement("button");
  const newDeleteButton = document.createElement("button");
  if (taskInput.value === "" || taskDescription.value === "") {
    return;
  }
  newSpan.textContent = taskInput.value;
  newSpan.classList.add("task");
  newDescription.textContent = taskDescription.value;
  newDescription.classList.add("description");
  newEditButton.textContent = "Editar";
  newDeleteButton.textContent = "Eliminar";
  newEditButton.classList.add("edit-button");
  newDeleteButton.classList.add("delete-button");
  newDiv.classList.add("botones");
  newItem.classList.add("item");
  newDiv.appendChild(newEditButton);
  newDiv.appendChild(newDeleteButton);
  newItem.appendChild(newSpan);
  newItem.appendChild(newDescription);
  newItem.appendChild(newDiv);
  upperItem.appendChild(newItem);
  taskInput.value = "";
  addEventEditButton();
  addEventDeleteButton(newDeleteButton);
}

function addEventDeleteButton(button) {
  button.addEventListener("click", function () {
    this.parentElement.parentElement.remove();
  });
}

function addEventEditButton() {
  // Seleccionamos todos los botones con la class edit-button
  const editbutton = document.querySelectorAll(".edit-button");
  // Recorremos cada uno de los botones
  for (let i = 0; i < editbutton.length; i++) {
    // Agregamos un evento de click a cada uno de los botones
    editbutton[i].addEventListener("click", function () {
      // Seleccionamos el span que queremos editar
      const span = this.parentElement.parentElement.querySelector("span");
      const description = this.parentElement.parentElement.querySelector("a");
      // Llamamos a la funcion edit_popup y le pasamos el texto del span que queremos editar
      spanToEdit = span;
      descriptionToEdit = description;
      edit_popup(span.textContent, description.textContent);
    });
  }
}

function edit_popup(titleValue, descriptionValue) {
  // Seleccionamos el popup
  const popup = document.querySelector(".popup-edit");
  // Lo mostramos cambiando la propiedad del css con style y display a flex
  popup.style.display = "flex";
  // Seleccionamos el input del popup
  const textPopup = document.querySelector(".task-input-edit");
  const descriptionPopup = document.querySelector(".task-description-edit");
  // Le asignamos el valor del texto que queremos editar,
  // es decir si dice "algo", al apretar editar, el input tendra el valor "algo"
  textPopup.value = titleValue;
  descriptionPopup.value = descriptionValue;
  // Seleccionamos el boton de guardar cambios
  const saveButton = document.querySelector(".save-changes");
  // Agregamos un evento de click al boton de guardar cambios
  saveButton.addEventListener("click", function () {
    // Cambiamos el texto del span que queremos editar por el texto del input
    spanToEdit.textContent = textPopup.value;
    descriptionToEdit.textContent = descriptionPopup.value;
    // Ocultamos el popup
    popup.style.display = "none";
  });
}

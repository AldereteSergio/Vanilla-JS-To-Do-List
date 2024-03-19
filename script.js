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
  editbutton();
  deletebutton();
}

function deletebutton() {
  // Seleccionamos todos los botones con la class delete-button
  const deleteButton = document.querySelectorAll(".delete-button");
  // Recorremos cada uno de los botones
  for (let i = 0; i < deleteButton.length; i++) {
    // Agregamos un evento de click a cada uno de los botones
    deleteButton[i].addEventListener("click", function () {
      this.parentElement.parentElement.remove();
    });
  }
}

function editbutton() {
  // Seleccionamos todos los botones con la class edit-button
  const editbutton = document.querySelectorAll(".edit-button");
  // Recorremos cada uno de los botones
  for (let i = 0; i < editbutton.length; i++) {
    // Agregamos un evento de click a cada uno de los botones
    editbutton[i].addEventListener("click", function () {
      // Seleccionamos el span que queremos editar
      const span = this.parentElement.parentElement.querySelector("span");
      // Llamamos a la funcion edit_popup y le pasamos el texto del span que queremos editar
      spanToEdit = span;
      edit_popup(span.textContent);
    });
  }
}

function edit_popup(textOutside) {
  // Seleccionamos el popup
  const popup = document.querySelector(".popup-edit");
  // Lo mostramos cambiando la propiedad del css con style y display a flex
  popup.style.display = "flex";
  // Seleccionamos el input del popup
  const textPopup = document.querySelector(".task-input-edit");
  // Le asignamos el valor del texto que queremos editar,
  // es decir si dice "algo", al apretar editar, el input tendra el valor "algo"
  textPopup.value = textOutside;
  // Seleccionamos el boton de guardar cambios
  const saveButton = document.querySelector(".save-changes");
  // Agregamos un evento de click al boton de guardar cambios
  saveButton.addEventListener("click", function () {
    // Cambiamos el texto del span que queremos editar por el texto del input
    spanToEdit.textContent = textPopup.value;
    // Ocultamos el popup
    popup.style.display = "none";
  });
}

import { createOrderData, updateDragging } from "./data.js";
import { createOrderHtml, updateDraggingHtml } from "./view.js";
import { html } from "./view.js";



// Function to handle showing and hiding add overlay
function handleAddToggle(event) {
  html.other.add.focus();
  const overlay = html.add.overlay;
  overlay.show();

  if (event.target === html.add.cancel) {
    overlay.close();
    html.add.form.reset();
  }
}

// Function to handle showing and hiding help overlay
function handleHelpToggle(event) {
  const overlay = html.help.overlay;
  overlay.show();

  if (event.target === html.help.cancel) {
    overlay.close();
  }
}

// Function to handle submitting the add form
function handleAddSubmit(event) {
  event.preventDefault();
  const overlay = html.add.overlay;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const newData = createOrderData(data);
  const htmlData = createOrderHtml(newData);
  const append = document.querySelector('[data-area="ordered"]');
  event.target.reset();
  overlay.close();
  append.appendChild(htmlData);
}

// Function to handle showing and hiding edit overlay
function handleEditToggle(event) {
  const overlay = html.edit.overlay;
  const cancelBtn = html.edit.cancel;
  const input = html.edit.title;
  const select = html.edit.table;
  const option = html.edit.column;
  let id = null;

  if (event.target.dataset.id) {
    id = event.target.dataset.id;
    overlay.show();
    input.value = event.target.querySelector(".order__title").textContent;
    select.value = event.target.querySelector(".order__value").textContent;

    const section = document.querySelector(`[data-id="${id}"]`);
    option.value = section ? section.closest("section").dataset.area : "";
  }

  if (event.target === cancelBtn) {
    overlay.close();
  }

  html.edit.delete.id = id;
}

// Function to handle submitting the edit form
function handleEditSubmit(event) {
  event.preventDefault();
  const idRemove = html.edit.delete.id;
  const orderDelete = document.querySelector(`[data-id="${idRemove}"]`);
  orderDelete.remove();
  const overlay = html.edit.overlay;
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const newData = createOrderData(data);
  const htmlData = createOrderHtml(newData);
  const appended = document.querySelector(`[data-area="${newData.column}"]`);
  appended.appendChild(htmlData);
  event.target.reset();
  overlay.close();
}

// Function to handle deleting an order
function handleDelete(event) {
  const idToBeDeleted = html.edit.delete.id;
  const orderToBeDeleted = document.querySelector(`[data-id="${idToBeDeleted}"]`);
  const overlay = html.edit.overlay;
  orderToBeDeleted.remove();
  overlay.close();
}
  

// Event listeners for the add, edit and help buttons
html.add.cancel.addEventListener('click', handleAddToggle);
html.other.add.addEventListener('click', handleAddToggle);
html.add.form.addEventListener('submit', handleAddSubmit);

html.other.grid.addEventListener('click', handleEditToggle);
html.edit.cancel.addEventListener('click', handleEditToggle);
html.edit.form.addEventListener('submit', handleEditSubmit);
html.edit.delete.addEventListener('click', handleDelete);

html.help.cancel.addEventListener('click', handleHelpToggle);
html.other.help.addEventListener('click', handleHelpToggle);
  
// Drag and drop functionality

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */


const handleDragOver = (event) => {
  event.preventDefault();
  
  const path = event.path || event.composedPath()
  
  let column = null
  
  for (const element of path) {
  const { area } = element.dataset
  if (area) {
  column = area
  break;
  }
  }
  
  if (!column) return
  updateDragging({ over: column })
  updateDraggingHtml({ over: column })
  }
  
  let dragged;
  
  const handleDragStart = (event) => {
  dragged = event.target;
  };
  
  const handleDragDrop = (event) => {
  event.target.append(dragged);
  };
  
  const handleDragEnd = (event) => {
  const background = event.target.closest("section");
  background.style.backgroundColor = "";
  };
  
  // Add event listeners to each HTML area element
  for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
  htmlArea.addEventListener("dragstart", handleDragStart);
  htmlArea.addEventListener("drop", handleDragDrop);
  htmlArea.addEventListener("dragend", handleDragEnd);
  }
  
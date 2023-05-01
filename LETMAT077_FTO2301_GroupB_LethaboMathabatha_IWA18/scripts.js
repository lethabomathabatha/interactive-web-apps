// script.js
import { COLUMNS } from './data.js'
import { TABLES } from './data.js';
import { state } from './data.js';
// import { createOrderData } from './data.js';
// import { updateDragging } from './data.js';

// import { createOrderHtml } from './view.js';
// import { html } from './view.js';
// import { updateDraggingHtml } from './view.js';
import { moveToColumn } from './view.js';

import { createOrderData } from "./data.js";
import { updateDragging } from "./data.js";
import { createOrderHtml } from "./view.js";
import { html } from "./view.js";
import { updateDraggingHtml } from "./view.js";


// User story 1: Add focus on the "Add Order" button when the page loads
const addButton = document.querySelector('[data-add]');
addButton.focus();

// User story 2: Add an event listener to the "?" icon to toggle the "Help" overlay visibility
const helpButton = document.querySelector('[data-help]');
const helpOverlay = document.querySelector('[data-help-overlay]');
helpButton.addEventListener('click', () => {
  helpOverlay.showModal();
});

// User story 3: Add an event listener to the "Close" button of the "Help" overlay 
const helpCloseButton = document.querySelector('[data-help-cancel]');
helpCloseButton.addEventListener('click', () => {
  helpOverlay.close();
});

// User story 4: Add an event listener to the "Close" button of all overlays to close the overlay and return focus to the "Add Order" button
const overlayCloseButtons = document.querySelectorAll('[data-add-cancel],[data-edit-cancel], [data-help-cancel]');
overlayCloseButtons.forEach(closeButton => {
  closeButton.addEventListener('click', () => {
    closeButton.closest('.overlay').close();
    addButton.focus();
  });
});

// User story 5: Add an event listener to the "Add Order" button to show the "Add Order" overlay and move focus to the "Item" input field
const addOrderButton = document.querySelector('[data-add]');
const addOrderOverlay = document.querySelector('[data-add-overlay]');
const addOrderTitle = document.querySelector('[data-add-title]');
addOrderButton.addEventListener('click', () => {
  addOrderOverlay.showModal();
  addOrderTitle.focus();
});

// User story 6: Add an event listener to the "Cancel" button of the "Add Order" overlay to close the overlay and return focus to the "Add Order" button, without adding a new order
const addOrderCancelButton = document.querySelector('[data-add-cancel]');
addOrderCancelButton.addEventListener('click', () => {
  addOrderOverlay.close();
  addButton.focus();
});

// User story 7: Add an event listener to the "Add" button of the "Add Order" overlay to close the overlay, add a new order to the "Ordered" column, and return focus to the "Add Order" button
const addOrderForm = document.querySelector('[data-add-form]');
addOrderForm.addEventListener('submit', event => {
  event.preventDefault(); 
  const orderTitle = addOrderForm.elements.title.value.trim();
  const orderTable = addOrderForm.elements.table.value;
  const orderedColumn = document.querySelector('[data-column="ordered"]');
  const newOrderElement = createNewOrderElement(orderTitle, orderTable);
  orderedColumn.appendChild(newOrderElement);
  addOrderOverlay.close();
  addButton.focus();
  addOrderForm.reset();
});

function createNewOrderElement(title, table) {
    const newOrderElement = document.createElement('div');
    newOrderElement.classList.add('order');
    newOrderElement.innerHTML = `
      <div class="order__title">${title}</div>
      <div class="order__table">Table ${table}</div>
    `;
    return newOrderElement;
  }

  // User story 8: If the “Add Order” overlay is closed (either with “Cancel” or “Add”) and it is opened again it should be blank (not have information from the last time it was opened).
  addOrderOverlay.addEventListener('close', () => {
    addOrderForm.reset();
  });

  // User story 9: If an order has been added and it is clicked on the “Edit Order” overlay should appear and the focus should be on the “Item” input field.
  const orders = document.querySelectorAll('[data-column="ordered"]');
  orders.forEach(order => {
    order.addEventListener('click', () => {
      const editOrderOverlay = document.querySelector('[data-edit-overlay]');
      const editOrderTitle = document.querySelector('[data-edit-title]');
      editOrderOverlay.showModal();
      editOrderTitle.focus();
    });
  });

  // User story 10: If the “Delete” button is pressed in the Edit Order overlay the overlay should be closed and the order should be removed entirely.
  const editOrderDeleteButton = document.querySelector('[data-edit-delete]');
  editOrderDeleteButton.addEventListener('click', () => {
    const editOrderOverlay = document.querySelector('[data-edit-overlay]');
    editOrderOverlay.close();
    const order = document.querySelector('.order');
    order.remove();
  });


// Helper function to create






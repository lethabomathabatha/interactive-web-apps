/* 
The following is code for a single web page that shows all the orders for a cake shop. 
It lists all the orders, and the items in the order, by means of unordered lists (<ul>). 
However, below that it should also display the total amount of each different item 
(Biscuits, Donuts and Pancakes) that are still outstanding vs. what has already been delivered.

Note that the values for each order are supplied directly via data attributes when the HTML is created. 
At the moment, none of the Loading... prompts are replaced with the actual JavaScript values. 
Your goal is to ensure that each instance of Loading... is swapped out with the value from the data attributes instead.

Use your knowledge of data attributes and interact with the DOM to achieve the goal. 
Use the HTML file as a reference, for creating your querySelector() calls. 
However, you are only allowed to change the code in the scripts.js file (not the HTML file), 
since the HTML is created by the server that reads from a database. This also means that you will 
need to rely on ID and class attributes to select specific HTML nodes.
*/



// const 1-root = document(order1), // the declaration for the variables is incorrect. A number cannot be a varibale, and a variable cannot begin with a number
// // const order1 = document(order1), // data-key is not defined/called
// const 1-biscuits: document(biscuits), // perhaps const 1 is supposed to be const order1
// const 1-donuts: document(donuts), // document does not define or fetch anything. it is not a querySelector,
// const 1-pancakes: document(pancakes), // nothing links these to order1 because of the incorrect syntax
// const 1-status: document(status)

// const 2-root = document(order2),
// const 2-biscuits: document(biscuits),
// const 2-donuts: document(donuts),
// const 2-pancakes: document(pancakes),
// const 2-status: document(status)

// const 3-root = document(order3),
// const 3-biscuits: document(biscuits),
// const 3-donuts: document(donuts),
// const 3-pancakes: document(pancakes),
// const 3-status: document(status)

// 1-biscuits= 1-root.biscuits,
// 1-donuts = 1-root.donuts,
// 1-pancakes = 1-root.pancakes,
// 1-status = 1-root.status ? Delivered : Pending

// 2-biscuits= 2-root.biscuits,
// 2-donuts = 2-root.donuts,
// 2-pancakes = 2-root.pancakes,
// 2-status = 2-root.status ? Delivered : Pending

// 3-biscuits= 3-root.biscuits,
// 3-donuts = 3-root.donuts,
// 3-pancakes = 3-root.pancakes,
// 3-status = 3-root.status ? Delivered : Pending


// document(biscuits.p-count).pending = 3-status ? 1-biscuits + 2-biscuits + 3-biscuits: 0
// document(biscuits.p-count).delivered 3-status ? 0 : 1-biscuits + 2-biscuits + 3-biscuits

// document(donuts.p-count).pending = 3-status ? 1-donuts + 2-donuts + 3-donuts: 0
// document(donuts.p-count).delivered 3-status ? 0 : 1-donuts + 2-donuts + 3-donuts

// document(pancakes.p-count).pending = 3-status ? 1-pancakes+ 2-pancakes+ 3-pancakes: 0
// document(pancakes.p-count).delivered 3-status ? 0 : 1-pancakes+ 2-pancakes + 3-pancakes

// Order 1
const order1 = document.querySelector('[data-key="order1"]');
const biscuits1 = order1.querySelector('.biscuits.count');
const donuts1 = order1.querySelector('.donuts.count');
const pancakes1 = order1.querySelector('.pancakes.count');


// Order 2
const order2 = document.querySelector('[data-key="order2"]');
const biscuits2 = order2.querySelector('.biscuits.count');
const donuts2 = order2.querySelector('.donuts.count');
const pancakes2 = order2.querySelector('.pancakes.count');

// Order 3
const order3 = document.querySelector('[data-key="order3"]');
const biscuits3 = order3.querySelector('.biscuits.count');
const donuts3 = order3.querySelector('.donuts.count');
const pancakes3 = order3.querySelector('.pancakes.count');


// Delivery statuses
// Order 1
biscuits1.textContent = order1.getAttribute('data-biscuits');
donuts1.textContent = order1.getAttribute('data-donuts');
pancakes1.textContent = order1.getAttribute('data-pancakes');

if (order1.getAttribute('data-delivered') === 'true') {
  status1.textContent = 'Delivered';
} else {
  status1.textContent = 'Pending';
}

// Order 2


biscuits2.textContent = order2.getAttribute('data-biscuits');
donuts2.textContent = order2.getAttribute('data-donuts');
pancakes2.textContent = order2.getAttribute('data-pancakes');

if (order2.getAttribute('data-delivered') === 'true') {
  status2.textContent = 'Delivered';
} else {
  status2.textContent = 'Pending';
}

// Order 3

biscuits3.textContent = order3.getAttribute('data-biscuits');
donuts3.textContent = order3.getAttribute('data-donuts');
pancakes3.textContent = order3.getAttribute('data-pancakes');

if (order3.getAttribute('data-delivered') === 'true') {
  status3.textContent = 'Delivered';
} else {
  status3.textContent = 'Pending';
}
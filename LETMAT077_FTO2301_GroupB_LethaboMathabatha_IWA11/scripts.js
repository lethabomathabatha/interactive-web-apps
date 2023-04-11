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

// Delivery status

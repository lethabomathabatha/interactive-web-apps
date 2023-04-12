// https://learn.codespace.co.za/courses/153/modules/454/lessons/1748

/* In this challenge, we are going to revisit and modify a previous challenge using object literals.

In the following snippet, we can update the IWA_6.4: Challenge 2 where we calculated the balance. 
However, it contains the same syntax errors as the challenge presented in the previous module - IWA_0.2: Challenge 1. 
This means that you will need to fix the syntax issues first.

 

Once again, you will need to ensure that the following behaviour works:
* The taxable amount should be subtracted from the salary before expenses are calculated
* The total should be the result of the after-tax amount with all expenses subtracted
 

However, there are some differences from the first time you encountered this functionality:
* All expenses are grouped in the expenses object.
* Instead of having a hardcoded tax amount, there is a tax object that has several reference 
  codes we can use to get different tax amounts. The one that we will use is 913
* Rent is listed using keys that are created from a combination of loading types and sizes.
* The matching key for rent should be created by interpolating the size and lodging variables provided.
* The number provided by this key should be used as the rent amount.
* You don’t have to worry about having space separators between numbers in this version, 
  you can just log it as a single number value.
 
The final value that should be logged to the console should be: 2685.2
*/

const salary = 4000;
const lodging = 'apartment'
const size = 'large'
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,

  	tax: {
		734: '3%',
		234: '20%',
		913: '12%',
		415: '38%',
		502: '42%',
	},

	rent: {
		none: 0,
		'small-room': 200,
		'large-room': 300,
		'small-apartment': 400,
		'large-apartment': 800,
		'small-house': 1200,
		'large-house': 2400,
	},
}


// You can change below however you want

// Inclusion of conditional statement to specify when balance should be calculated, i.e. at midnight
if (hourOfDay === 0 && minuteOfDay === 0) {
const taxAsDecimal = parseInt(expenses.tax[913]) / 100;
const startingAfterTax = salary  * (1 - taxAsDecimal);
const type = `${size}-${lodging}`;
const rentAmount = expenses.rent[type];
const taxableAmount = startingAfterTax - rentAmount;
const balance = taxableAmount - expenses.transport - expenses.food;

console.log(balance.toFixed(2));
} else {
	console.log("Balance cannot be calculated at this time.") 
}

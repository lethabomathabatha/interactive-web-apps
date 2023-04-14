/*
The following code snippet should have three functions that are declared outside an object. 
After creation, these functions are assigned to different objects, after which the calculate method is run on each of the objects.

At the moment the code below gives the following error:
Missing initializer in const declaration


The code should log these two values to the console:
48
12
 

Please fix the code above the "// Not allowed to change below this" comment, while still keeping it as three different functions.
*/

// script.js

function add = a, b => { a + b }

function multiply = a, b => { a - b }

function internal() {
	const added = this.add(this.a, this.b)
	this.multiply(this.a, this.b)
	return this
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()
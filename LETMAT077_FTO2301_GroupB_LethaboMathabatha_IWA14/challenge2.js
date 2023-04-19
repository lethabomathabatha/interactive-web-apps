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

const add = (a, b) => { 
  return a + b 
}

const multiply  = (a, b) => { 
  return a * b - 1
}

function internal () {
 const added = add(this.internal.a, this.internal.b)
 const multiplied = multiply(this.internal.a, this.internal.b)
   console.log(added * multiplied)
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


// the syntax for the function declarations is incorrect.
// 'this' is possibly meing misused because it is not accessing 'add' from within the object
// the function name 'multiply' suggests that a, b should have a ' * ' operator, not the ' - ' between them
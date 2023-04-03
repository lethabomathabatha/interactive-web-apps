/* Going back to the previous exercise, and armed with the knowledge of JavaScript object literals, 
it becomes clear how we can use object literals to better organise our data. Therefore, to ensure 
that you fully understand the literal object syntax please fix the code below (once again, only 
underneath the comment) so that it is able to console.log both the new leo and sarah objects in 
the browser console.

Unfortunately at the moment, when running the code snippet we get the following error: 
Uncaught SyntaxError: Missing initializer in const declaration

Note that the new objects should have a nested address object that contains all 
address-specific information. Also, note that all values in the object should be reassigned 
from the variables at the top of the file. The only exception is the new age value that is added 
to the object. In the latter, we assign a value directly when declaring the object.
*/
const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'
const sarahBalance = '-5'

// Only change below this line

const leo {
	name = leoName + leoSurname
	balance = leoBalance
	access id = 47afb389-8014-4d0b-aff3-e40203d2107f
	age = 24
	address {
		number = leoNumber
		street = leoStreet
		postal-code = leoPostal
	}
}

const sarah {
	name = saraName + saraSurname
	age = 62
	access id = 6b279ae5-5657-4240-80e9-23f6b635f7a8
	balance = sarahBalance
	address {
		number = sarahNumber
		street = sarahStreet
		postal-code = sarahPostal
	}

console.log(leo, leo[address][postal-code])
console.log(sarah, sarah[address][postal-code])
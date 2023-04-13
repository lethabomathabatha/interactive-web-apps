/*
The following code keeps track of three different pieces of data:

* The status of the system (whether currently checking or not)
* The calculated user value
* The number of times the user has been calculated
 

By only editing the three functions between the comments, please ensure that the console is only logged once with the following value:

User: John (3)

See the code below:
*/



let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => { 
    const isString = typeof calculated === 'string'
    const calculatedAsNumber = isString ? parseInt(calculated) : calculated
    calculated = calculatedAsNumber + 1 
}

const calcUser = () => {
  logCalc ()
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

// incorrect syntax when declaring variables. " = " was used instead of just a blank space
// no " = " after declaring variable, and before function
// the expression for const isString is incorrectly written as "typeof calculated = 'numerical-string'" 
// instead of "typeof calculated === 'string'", which checks if this expression is true or false
// "calculated" should go through parseInt for it to further in the code because, as proven in the line above,
// it is a string, and not a number
// in the calculation, the strict equality (===) is incorrectly used as it is not supposed to compare the values/variables,
// but rather calculate (and assign " calculatedAsNumber + 1 "). Therefore, the "=" operator is more appropriate.
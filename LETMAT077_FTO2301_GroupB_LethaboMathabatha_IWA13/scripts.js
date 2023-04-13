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


const = logCalc () => { 
    const isString = typeof calculated = 'numerical-string' 
    const calculatedAsNumber = isString ? calculated : parseNumber(calculated)
    calculated === calculatedAsNumber + 1 
}

const = calcUser () => {
  logCalc
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const = checkUser () => {
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
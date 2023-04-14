/*
The following code should take the values provided as variables, and create logTwice function. 
The logTwice function should take a provided parameter and log it two times. In other words, 
the following should be logged in the console twice:

Hello, John (35). I love coding!

 
Unfortunately at the moment when attempting to run the code the following error is returned:

hobby is not a function
*/

firstName = 'John';
age = 35;
hobby = 'Coding';

const logTwice = () => {
  console(parameter)
  console(parameter)
}

function hobby () {
  logTwice(`Hello, ${name} (${age}). I love ${hobby}!`)
}

hobby()


// the parameter in the logTwice function is not declared or defined
// console(parameter) is incorrectly stated. It should be console.log(parameter)
// the function 'hobby' should be renamed as it conflicts with the variable 'hobby'
// there is no variable called 'name', but there is 'firstName' which should be in place of 'name'
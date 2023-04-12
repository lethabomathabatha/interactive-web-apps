/* The following code should log a message that says Good morning 
with a dynamically entered name (from two possible variables).

Either a nickname and/or firstname can be added as variables in the code. 
If a nickname is present it should be displayed instead of the firstname, 
if there is no nickname then the firstname should be shown. Unfortunately, 
currently, the following gets logged: 
Good morning, ${nickname} || {firstname}!.

Please change the expression, in the console log, to behave correctly, and 
explain why it did not behave as expected. Furthermore, please add a state 
that when neither a firstname nor nickname is present only Good morning! should be logged.
*/
 

const nickname= "Timmy";
const firstname = "Timothy";
const chosenName = nickname || firstname

if (chosenName){
    console.log(`Good Morning, ${chosenName}!`)
}
else  {
    console.log("Good Morning!")
}


// Alternative solution:
const nickname1= "Timmy";
const firstname1 = "Timothy";

if (nickname1) {
    console.log("Good Morning, " + nickname1 + "!")
}
else if (firstname1) {
    console.log("Good Morning, " + firstname1 + "!")
}

else  {
    console.log("Good Morning!")
}



// The first solution assigns 'nickname' if 'nickname' is a truthy, 
// otherwise it will assign 'firstname'.

// Both code solutions have the same functionality
/*
In the following exercise, you will need to extract the numbers from all three arrays in lists 
inside the data object and combine all values into a new single array called result.

The extractBiggest function will be run 15 times and will grab a single number and add it to the result 
array (as per the bottom section of the code that you are not allowed to edit).

You will need to ensure that the extractBiggest function looks at the last item in each of the three lists 
and selects the biggest one. It should remove the value from the current array under lists and move it to the 
results array. Running the code below should result in the following array being logged to the console:

[10, 12, 14, 5, 7, 13, 11, 15, 4, 8, 6, 2, 1, 3, 9]

 

While the code runs, it logs the incorrect arrays, as seen below:

[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

 

Please update the code between the two comments below so that the correct array value is logged.

 

Summary:

Edit only the code between the two comment lines
The code must compare the last value of each provided array
The largest value must be removed from it’s array
The largest value must be added to the result array
*/

// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

// accessing all arrays within the 'lists' object
const first = data.lists[0][1]
const second = data.lists[1][1]
const third = data.lists[2][1]

console.log(data.lists[0][1])
console.log(data.lists[1][1])
console.log(data.lists[2][1])


// accessing all the last values from the arrays within the 'lists' object
const firstLast = first[first.length - 1]; 
const secondLast = second[second.length - 1]; 

const thirdLast = third[third.length - 1]; 


// comparing the values within the arrays with each other

const result = []

const extractBiggest = () => {
    const firstLast = data.lists[0][1][data.lists[0][1].length - 1];
    const secondLast = data.lists[1][1][data.lists[1][1].length - 1];
    const thirdLast = data.lists[2][1][data.lists[2][1].length - 1];

    let biggestIndex = -1;
    if (firstLast > secondLast && firstLast > thirdLast) {
        biggestIndex = 0;
    } else if (secondLast > firstLast && secondLast > thirdLast) {
        biggestIndex = 1;
    } else {
        biggestIndex = 1;
    }

    const biggest = data.lists[biggestIndex][1][data.lists[biggestIndex][1].length - 1];
    data.lists[biggestIndex][1].pop();

    return biggest;
}




// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)
// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

// accessing all the values in the arrays within the 'lists' object
const first = data.lists[0][1]
const second = data.lists[1][1]
const third = data.lists[2][1]

// accessing all the last values from the arrays within the 'lists' object
const firstLast = first[first.length - 1]; 
const secondLast = second[second.length - 1]; 
const thirdLast = third[third.length - 1]; 


// comparing the values within the arrays with each other

const result = []

const extractBiggest = () => {
    let biggestIndex = -1; // index of the list that contains biggest value
    let biggestValue = -Infinity; // biggest value so far
    let foundValue = false; // indicates whether any value was found

    // loop through each list in the data.lists array
    for (let i = 0; i < data.lists.length; i++) {
      const list = data.lists[i][1];

      // check if the list has any elements left, and if the last element is bigger than 'biggestValue'
      if (list.length > 0 && list[list.length - 1] > biggestValue) {
        biggestValue = list[list.length - 1];
        // adds to current list's index
        biggestIndex = i;
        foundValue = true;
      }
    }
    if (foundValue) {
      data.lists[biggestIndex][1].pop();
      return biggestValue;
    } else {
        // if there are no values left to evaluate
      return undefined;
    }
  };
  
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
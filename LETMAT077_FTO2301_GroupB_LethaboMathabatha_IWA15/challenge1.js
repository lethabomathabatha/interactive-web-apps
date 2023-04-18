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
    const firstLast = data.lists[0][1][data.lists[0][1].length - 1]; 
    const secondLast = data.lists[1][1][data.lists[1][1].length - 1];
    const thirdLast = data.lists[2][1][data.lists[2][1].length - 1];

    let biggestIndex = -1;
    if (firstLast > secondLast && firstLast > thirdLast) {
        biggestIndex = 0;
    } else if (secondLast > firstLast && secondLast > thirdLast) {
        biggestIndex = 1;
    } else {
        biggestIndex = 2;
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
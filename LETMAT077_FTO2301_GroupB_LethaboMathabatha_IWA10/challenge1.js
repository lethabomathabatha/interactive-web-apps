// https://learn.codespace.co.za/courses/153/modules/455/lessons/1750

const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment


// Checking whether an item has been assigned to key 9
console.log(holidays[futureId]?.name || 'ID 9 not created yet.')


// Temporary changes are stored here:
const copied = {
	holidays: {
		name: holidays[6].name,
		date: holidays[6].date
	}
}

const correct = {
	newName: 'X-mas Day',
	newDate: new Date(`25 December ${currentYear}`),
	newTime: {
		hours: 0,
		minutes:0,
	}
}

// Checking if new date is earlier than current date
console.log(
	correct.newDate < holidays[6].date ? `New date is earlier: ${true}`: `New date is earlier: ${false}`)


if (correct.newDate < holidays[6].date ) {
	console.log(`Changes applied: 
	 	\nID change: false 
		\nName change: ${correct.newName} 
		\nTime change: ${correct.newTime.hours.toString().padStart(2, '0')}:${correct.newTime.minutes.toString().padStart(2, '0')} 
		\nDate change: ${correct.newDate.toLocaleDateString('en-GB')}`)
}


// Converting string date in the 'holidays'[0] object to Date object
holidays[0].date = new Date(holidays[0].date);


// Getting first holiday of the year
const firstHolidayTimestamp = Math.min(
    holidays[0].date,
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date,
);

const firstHolidayDate = new Date(firstHolidayTimestamp);
const day = firstHolidayDate.getDate();
const month = firstHolidayDate.getMonth() + 1;
const year = firstHolidayDate.getFullYear();

console.log(`The first holiday of the year: ${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`);
  

// Getting last holiday of the year
const lastHolidayTimestamp = Math.max(
    holidays[0].date,
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date,
)

const lastHolidayDate = new Date(lastHolidayTimestamp);
const lastDay = lastHolidayDate.getDate();
const lastMonth = lastHolidayDate.getMonth() + 1;
const lastYear = lastHolidayDate.getFullYear();

console.log(`The last holiday of the year: ${lastDay.toString().padStart(2, '0')}/${lastMonth.toString().padStart(2, '0')}/${lastYear}`); // used padStart so that it is not hardcoded, incase the last holiday of the year is a single digit month


// Logging a random holiday
const randomHoliday = holidays[Math.floor(Math.random() * Object.keys(holidays).length)].date.toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric'})
console.log(`Random holiday: ${randomHoliday}`)


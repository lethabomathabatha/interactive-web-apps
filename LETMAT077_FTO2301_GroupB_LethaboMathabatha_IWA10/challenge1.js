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

// 1. Checking whether an item has been assigned to key 9
console.log(holidays[futureId]?.name || 'ID 9 not created yet.')

/* Alternative code for condition 1:
if (holidays[futureId]) {
	console.log(holidays[futureId].name)
} else {
	console.log('ID 9 not created yet.')
}
*/



// Temporary changes are stored here:
const copied = {
	holidays: {
		name: holidays[6].name,
		date: holidays[6].date
	}
}

const correct = {
	name: 'X-mas Day',
	date: copied.date,
	time : {
		hours: 0,
		minutes: 0,
	}
}

// Checking if new date is earlier than current date
const currentDate = holidays[6].date
const isEarlier = copied.date <holidays[6].date

if (isEarlier) {
	console.log("New date is earlier: true")
} else {
	console.log(`New date is earlier: ${copied.date < holidays[6].date}`);
  }


// If date is earlier, apply changes to copied
if (isEarlier) {
    holidays[6].name = correct.name
    console.log(`Changes applied: \nID change: false \nName change: ${correct.name} \nTime change: ${correct.time.hours.toString().padStart(2, '0')}:${correct.time.minutes.toString().padStart(2, '0')} \nDate change: ${copied.date.toLocaleDateString('en-ZA')}`);
} else {
    console.log('Changes not applied.')
}

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
const formattedFirstDate = `${firstHolidayDate.getDate()}/${firstHolidayDate.getMonth() +1}/ 2030`;

console.log(`The first holiday of the year is ${formattedFirstDate}`);
// const firstDay = firstHolidayTimestamp.getDate();
// const firstMonth = firstHolidayTimestamp.getMonth() +1;

//console.log(`The first holiday of the year is ${firstDay}/${firstMonth}/${2030}`);

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
const formattedLastDate = `${lastHolidayDate.getDate()}/${lastHolidayDate.getMonth() +1}/2030`;

console.log(`The last holiday of the year is ${formattedLastDate}`);

// const lastDay = lastHolidayTimestamp.getDate();
// const lastMonth = lastHolidayTimestamp.getMonth() +1;

// console.log(`The last holiday of the year is ${lastDay}/${lastMonth}/${2030}`);


// Logging a random holiday
const randomHoliday = holidays[Math.floor(Math.random() * Object.keys(holidays).length)].date.toLocaleDateString('en-ZA', {day: '2-digit', month: '2-digit', year: 'numeric'})
console.log(`Random holiday: ${randomHoliday}`)

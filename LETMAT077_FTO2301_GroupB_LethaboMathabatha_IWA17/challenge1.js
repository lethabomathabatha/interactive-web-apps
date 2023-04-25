// https://learn.codespace.co.za/courses/153/modules/462/lessons/1796

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Only edit below  


/**
 * @param length is used to attain 31 days for the month by 
 * incrementing the day by 1
 */
const createArray = (length) => {
  const result = []

  for (let day = 1; day <= length ; day++ ) {
      result.push(day);
  }
  return result;
};

// const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
// new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

/**
 * 
 * @returns something
 */
const createData = () => {
  const current = new Date();
  current.setDate(1);

  const startDay = current.getDay();
  const daysInMonth = getDaysInMonth(current);

  const result = [];


  // const weekObject = createArray(5)
  // const dayObject= createArray(7)
  // value = null

  for (let weekIndex = 0; weekIndex < 6; weekIndex++) {
      const weekObject = {
          week: weekIndex + 1,
          days: [],
      }

      for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
        const day = weekIndex * 7 + dayIndex - startDay +1;
        const isValid = day > 0 && day <= daysInMonth;

        const dayObject = {
          dayOfWeek: dayIndex + 1,
          value: isValid ? day : '',
        }

        weekObject.days.push(dayObject); 
      }
      result.push(weekObject);
  }
  return result;
};

const addCell = (/*existing,*/ classString, value) => {
  return /* html */ `
      <td class = 'table__cell  ${classString}'>
          ${value}
      </td>
      `;
  // return result;
};

const createHtml = (data) => {
  let result = '';

  data.forEach ((week) => {
      let inner = ''
      inner += addCell('table__cell table__cell_sidebar', `Week ${week.week}`)
  
      week.days.forEach((day) => {
          const { dayOfWeek, value } = day;
          let classString = 'table__cell';

          // Setting class for weekends
          // const isWeekend = dayOfWeek === 1 || dayOfWeek === 7;
          if (dayOfWeek === 1 || dayOfWeek === 7) {
            classString += 'table__cell_weekend';
          };

          // Setting class for alternate weeks
          // const isAlternate = week.week % 2 === 0;
          if (week.week % 2 === 0) {
            classString += ' table__cell_alternate';
          } 

          // Setting class for current date
          if (value === new Date().getDate()) {
            classString += 'table__cell_today';
          }
          
          inner += addCell( classString, value);
      }); 

      result += `<tr>${inner}</tr>`;
      });
      return result;
};

// Only edit above

const current = new Date();
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData();
document.querySelector('[data-content]').innerHTML = createHtml(data)
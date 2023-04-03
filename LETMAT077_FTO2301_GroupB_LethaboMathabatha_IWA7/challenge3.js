// https://learn.codespace.co.za/courses/153/modules/452/lessons/1745

const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = parseFloat(leoBalance  * -1) + parseFloat(sarahBalance * -1); 

const leo = `\n${leoName} ${leoSurname.trim()} (Owed: R ${(parseFloat(-1 * leoBalance).toFixed(2))}`
const sarah = `\n${sarahName.trim()} ${sarahSurname} (Owed: R ${(parseFloat(-1 * sarahBalance).toFixed(2))}`
const total = "\n  Total amount owed: R "
const dividerLine = "\n----------------------------------"

const result = leo + sarah + dividerLine + total + owed.toLocaleString('en-ZA', {minimumFractionDigits: 2, maximumFractionDigits: 2}).replace(',', '.') + dividerLine + "\n " 

console.log(result)

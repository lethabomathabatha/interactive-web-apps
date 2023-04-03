/* The following code is meant to output as a single value 
(only a single console.log) but split into three different lines.

It should be as follows:
*/
Leo Musvaire (Owed: R 9394.00)
Sarah Kleinhans (Owed: R 4582.20)

----------------------------------
  Total amount owed: R 14 976.20
----------------------------------

// Note the empty line at the start, and the empty line above the total divider. 
// Also note the indentation of two spaces at the start and end of Total amount owed: R 14 976.20
// Unfortunately at the moment, it outputs a single line as:

{leoName} + {leoSurname} + "Owed" + "R" + {sarahBalance}{leoName} + {surname} + "Owed" + "R" + {sarahBalance}--------------------------------------------------------------------Total amount owed: NaN----------------------------------


/* Note that it is very that the value be shown as a positive of money “owed”, 
i.e. it should be R 14 976.20 and not a negative (for example -14976.20 ). 
Also, note the thousand separator between 14 and 976.20.

Lastly, note that the cent value always needs to be displayed. 
This means that it should always have 2 two decimals after a value. 
The absence of or no decimals is not allowed, nor is more than two decimals allowed.

It is recommended that you Google and read up on the following:

* The difference between parseInt and parseFloat
* The .toFixed() method
*/
const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = parseInt('R' + leoBalance + sarahBalance)
const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
const total = "Total amount owed: "
const result = leo + sarah + divider + divider + total + owed + divider

console.log(result)
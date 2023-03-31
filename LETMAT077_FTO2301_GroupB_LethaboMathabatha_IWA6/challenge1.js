const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

// Only change below this line

const primaryValid = !isNaN(primaryPhone) && primaryPhone.length === 10; 
const secondaryValid = !isNaN(secondaryPhone) && secondaryPhone.length === 10;

console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid);


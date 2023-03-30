/* The following logic is used in an online store. There are two straightforward functions used to calculate shipping and total cost.
If a user is in South Africa their shipping should be R400, if a user is in Namibia their shipping should be $600, for all other 
countries shipping is $800. Note that we do not ship to North Korea and users from North Korea should receive a notice of such.

In addition to the above, if a user’s cost without shipping is equal to or more than R1000 or $60 in cost and they are based in 
South Africa or Namibia, then their shipping should be free. However, this is only the case if the number of customers is exactly 1, 
otherwise, it should show the message stored WARNING.

Currently, the code is supposed to log the following to the console: Price: R1270. However, at the moment it does not even run. 
Please look at it and not only consider how it can be fixed but also pay attention to making recommendations in terms of how the 
code can express the logic in a more easily understandable/readable manner.
*/



const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'

const location = 'RSA'
let shipping = null
let currency = 'R'

let customers = 1

if (location === 'RSA') { 
    shipping = 400;
    currency = 'R'
}

    else if (location === 'NAM') {
        shipping = 600;
        currency = '$'
    }
    else if (location === 'NK') {
        console.log (BANNED_WARNING)
    }

    else {
        shipping = 800;
        currency = '$'
    }


// this is a cart?
let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED

const subTotal = shoes + toys + shirts + batteries + pens;

if (subTotal >= 1000 && (currency ==='R' && location === 'RSA' ) || (subTotal >= 60 && (currency === '$' && location === 'NAM'))) {
	if (location === 'RSA' && customers < 2 || location === 'NAM' && customers < 2) {
		    shipping = 0
		}
	}


if (shipping === 0 && customers !== 1) { 
    console.log(FREE_WARNING) 
}
    else {
        console.log('Price: ', currency, subTotal + shipping)
}


/* The following logic is used in an online store. There are two straightforward functions used to calculate shipping and total cost.
If a user is in South Africa their shipping should be R400, if a user is in Namibia their shipping should be $600 for all other 
countries shipping is $800. Note that we do not ship to North Korea and users from North Korea should receive a notice of such.

In addition to the above, if a user’s cost without shipping is equal to or more than R1000 or $60 in cost and they are based in 
South Africa or Namibia, then their shipping should be free. However, this is only the case if the number of customers is exactly 1, 
otherwise, it should show the message stored WARNING.

Currently, the code is supposed to log the following to the console: Price: R1270. However, at the moment it does not even run. 
Please look at it and not only consider how it can be fixed but also pay attention to making recommendations in terms of how the 
code can express the logic in a more easily understandable/readable manner.
*/



FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'

if (location = RSA) { shipping === 400 && currency === 'R' }

if location = NAM
shipping = 600 
else shipping = 800

shoes = 300 * 1
toys - 100 * 5
hirts = 150 * 'NONE_SELECTED'
batteries 35 * 2
pens = 5 * 'NONE_SELECTED' 

shipping = null
currency = $

if (shoes + batteries + pens + shirts > 1000 &&  ) {
	if (location = NAM && customers < 2) {
			if (location = RSA)
		    shipping = 0 || calcShipping
		}
	}
}

if (shipping = 0) && (customers !=== 1) { console.log(WARNING) }

location = 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)

customers = '1'
const location = 'RSA'
currency = null
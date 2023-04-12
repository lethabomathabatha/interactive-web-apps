const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 


// Get button IDs and classes

const allBooks = document.querySelectorAll('div[id^="book"]'); // getting all ids that start with 'book'

// Loop to get statuses for all the books
allBooks.forEach((book) => {
    
// Get book status and compare to status map requirements
    const status = book.querySelector('.status');
    const bookStatus = status.innerText.trim();
    const statusMap = STATUS_MAP[bookStatus];


    const reserve = book.querySelector('.reserve');
    const checkout = book.querySelector('.checkout');
    const checkin = book.querySelector('.checkin');

// Disable-Enable buttons according to corresponding status
    if (statusMap.canReserve) {
        reserve.disabled = false;
       
    } else {
        reserve.disabled = true;
        checkin.style.color = "black";
    }
    
    if (statusMap.canCheckout) {
        checkout.disabled = false;
        
    
    } else {
        checkout.disabled = true;
        checkin.style.color = "lightgrey";
    }
    
    if (statusMap.canCheckIn) {
        checkin.disabled = false; 
        checkin.style.color = "black";
        
    } else {
        checkin.disabled = true;
        checkin.style.color = "lightgrey";
    }
    
    status.style.color = statusMap.color;

// add event listeners according to corresponding status

    reserve.addEventListener('click', () => {
        status.innerText = 'reserved';
        reserve.disabled = true;
        checkout.disabled = false;
        checkin.disabled = true;
        status.style.color = STATUS_MAP.reserved.color;
      });
    
    checkout.addEventListener('click', () => {
        status.innerText = 'checkedOut';
        reserve.disabled = true;
        checkout.disabled = true;
        checkin.disabled = false;
        status.style.color = STATUS_MAP.checkedOut.color;
      });
    
    checkin.addEventListener('click', () => {
        status.innerText = 'shelf';
        reserve.disabled = false;
        checkout.disabled = false;
        checkin.disabled = true;
        status.style.color = STATUS_MAP.shelf.color;
      });
        
});

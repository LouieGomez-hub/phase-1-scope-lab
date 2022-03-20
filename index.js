var customerName = 'bob'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

var bestCustomer;
function setBestCustomer() {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'leo'
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'jake'
}
var Customer = /** @class */ (function () {
    //constructor
    function Customer(theFirstName, theLastName) {
        this.firstName = theFirstName;
        this.lastName = theLastName;
    }
    return Customer;
}());
var myCustomer = new Customer('Dixon', 'Martin');
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

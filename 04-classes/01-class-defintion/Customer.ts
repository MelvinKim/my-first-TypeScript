class Customer {

    firstName: string;
    lastName: string;

    //constructor
    constructor(theFirstName: string, theLastName: string){
        this.firstName = theFirstName;
        this.lastName = theLastName;
    }
}

let myCustomer = new Customer('Dixon', 'Martin');



console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

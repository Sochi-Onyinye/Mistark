class BusinessOwner {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    
    changeFirstName(newFirstName) {
        this.firstName = newFirstName;
    }

    changeLastName(newLastName) {
        this.lastName = newLastName;
    }

    changeEmail(newEmail) {
        this.email = newEmail;
    }
}
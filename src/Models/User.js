export default class User{
	constructor(id, fname, lname, email, password, dob, phoneNumber) {
		this.id = id
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.password = password;
		this.dob = dob;
		this.phoneNumber = phoneNumber;
	}
	
	getID() {
		return this.id;
	}

	getDOB() {
		return this.dob;
	}

	getPhoneNumber() {
		return this.phoneNumber;
	}


	getFName() {
		return this.fname;
	}

	getLName() {
		return this.lname;
	}

	getName() {
		return this.fname + " " + this.lname;
	}

	getEmail() {
		return this.email;
	}

	setFName(new_name) {
		this.fname = new_name;
	}

	setLName(new_name) {
		this.lname = new_name;
	}

	setEmail(new_email) {
		this.email = new_email;
	}

	setPassword(new_password) {
		this.password = new_password;
	}

	getPassword() {
		return this.password;
	}

	setDOB(dob) {
		this.dob =  dob;
	}

	setPhoneNumber(phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
}
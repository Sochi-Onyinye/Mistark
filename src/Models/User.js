import {v4 as uuidv4} from 'uuid';
	
export default class User{
	user_uuid = uuidv4();

	constructor(fname, lname, email, password) {
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.password = password;
	}
	
	getUuid() {
		return this.user_uuid;
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

	validatePassword(given_password) {
		return this.password == given_password;
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
}

class BusinessOwner extends User {

	constructor(fname, lname, email, password, business_ids) {
		super(fname, lname, email, password);
		this.businesses = business_ids;
	}

	getBusinesses() {
		return this.businesses;
	}

	setBusinesses(business_ids) {
		this.businesses = business_ids;
	}

	updateBusinesses() {
		// Will be implemented with DB methods
		return 0;
	}
}
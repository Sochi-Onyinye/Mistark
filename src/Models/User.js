import {v4 as uuidv4} from 'uuid';
	
export default class User{
	user_uuid = uuidv4();

	constructor(name, email, password) {
		this.name = name;
		this.email = email;
		this.password = password;
	}
	
	getUuid() {
		return this.user_uuid;
	}

	getName() {
		return this.name;
	}

	getEmail() {
		return this.email;
	}

	validatePassword(given_password) {
		return this.password == given_password;
	}

	setName(new_name) {
		this.name = new_name;
	}

	setEmail(new_email) {
		this.email = new_email;
	}

	setPassword(new_password) {
		this.password = new_password;
	}
}
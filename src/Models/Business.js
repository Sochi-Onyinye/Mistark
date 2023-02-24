import {v4 as uuidv4} from 'uuid';

class Business {

	business_uuid = uuidv4();

	constructor(name, owners, description, location, hours, category, products, reviews) {
		this.name = name;
		this.owners = pwners;
		this.description = description;
		this.location = location;
		this.hours = hours;
		this.category = category;
	}

	getBusinessId() {
		return this.business_uuid;
	}
	
	getName() {
		return this.name;
	}

	getOwners() {
		return this.owners;
	}

	getDescription() {
		return this.description;
	}

	getLocation() {
		return this.location;
	}

	getHours() {
		return this.hours;
	}

	getCategory() {
		return this.category;
	}

	setName(new_name) {
		this.name = new_name;
	}

	setDescription(new_description) {
		this.description = new_description;
	}

	setLocation(new_location) {
		this.location = new_location;
	}

	setHours(new_hours) {
		this.hours = new_hours;
	}

	setCategory(new_category) {
		return this.category = new_category;
	}

}
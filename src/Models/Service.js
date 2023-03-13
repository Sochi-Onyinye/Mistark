import {v4 as uuidv4} from 'uuid';
	
class Service {
	service_uuid = uuidv4();

	constructor(title, category, cost, description, image, business_id) {
		this.business_id = business_id;
		this.title = title;
		this.category = category;
		this.cost = cost;
		this.text = description;
		this.image = image;
	}

	getServiceId() {
		return this.service_uuid;
	}

	getBusinessId() {
		return this.business_id;
	}

	getTitle() {
		return this.title;
	}

	getCategory() {
		return this.category;
	}

	getCost() {
		return this.cost;
	}

	getText() {
		return this.text;
	}

	getImage() {
		return this.image;
	}

	setBusinessId(new_business) {
		this.business_id = new_business;
	}

	setTitle(title) {
		this.title = title;
	}

	setCategory(category) {
		this.category = category;
	}

	setCost(cost) {
		this.cost = cost;
	}

	setText(text) {
		this.text = text;
	}

	setImage(image) {
		this.image = image;
	}
}
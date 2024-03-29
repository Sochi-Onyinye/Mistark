export default class Business {
	constructor(id, name, owner, description, address, location, hours, category, profileImage, businessImages) {
		this.id = id
		this.name = name;
		this.owner = owner;
		this.description = description;
		this.address = address
		this.location = location;
		this.hours = hours;
		this.category = category;
		this.profileImage = profileImage
		this.businessImages = businessImages
	}

	getID() {
		return this.id;
	}
	
	getProfileImage() {
		return this.profileImage;
	}

	getBusinessImages() {
		return this.businessImages;
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
		this.category = new_category;
	}

	setProfileImage(image) {
		this.profileImage = image
	}

}
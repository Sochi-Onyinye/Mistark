class Business {
	constructor(name, owners, description, location, hours, category, products, reviews) {
		this.name = name;
		this.owners = pwners;
		this.description = description;
		this.location = location;
		this.hours = hours;
		this.category = category;
		this.products = products;
		this.reviews = reviews;
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

	getProducts() {
		return this.products;
	}

	getReviews() {
		return this.reviews;
	}

	setName(new_name) {
		this.name = new_name;
	}

	setOwners(new_owners) {
		this.owners = new_owners;
	}

	addOwners(new_owners) {
		this.owners.push(new_owners);
	}

	deleteOwner(old_owner) {
		old_index = this.owners.indexOf(old_owner);
		if (old_index > -1) {
    		this.owners.splice(old_index, 1);
        }
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

	setProducts(new_owners) {
		this.owners = new_owners;
	}

	addProduct(new_product) {
		this.products.push(new_product);
	}

	deleteProduct(old_product) {
		old_index = this.owners.indexOf(old_product);
		if (old_index > -1) {
    		this.products.splice(old_index, 1);
        }
	}

	setReviews(new_reviews) {
		this.reviews = new_reviews;
	}

	addReview(new_review) {
		this.reviews.push(new_review);
	}

	deleteReview(old_review) {
		old_index = this.reviews.indexOf(old_review);
		if (old_index > -1) {
    		this.reviews.splice(old_index, 1);
        }
	}
}
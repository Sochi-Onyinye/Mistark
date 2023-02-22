class Product{
	constructor(title, category, cost, description, image) {
		this.title = title;
		this.category = category;
		this.cost = cost;
		this.text = description;
		this.image = image;
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
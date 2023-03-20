export default class Category {
	constructor(name, description, id) {
        this.id = id
		this.name = name;
		this.description = description;
	}

	getID() {
		return this.id;
	}
x
	getDescription() {
		return this.description;
	}

	getName() {
        return this.name;
    }
	
	setName(new_name) {
		this.name = new_name;
	}

    setDescription(new_description) {
        this.description = new_description;
    }
}
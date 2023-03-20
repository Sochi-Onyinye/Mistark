import User from "./User.js"

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
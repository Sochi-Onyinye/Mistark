export default class Review{
	constructor(id, userID, description, moneyRating, serviceRating, locationRating, businessID, content ) {
		this.id = id;
		this.user_id = userID;
		this.moneyRating = moneyRating;
		this.serviceRating = serviceRating;
		this.businessID = businessID;
		this.locationRating = locationRating;
		this.content = content;
	}

	getReviewId() {
		return this.id;
	}

	getUserId() {
		return this.user_id;
	}

	getBusinessId() {
		return this.businessID;
	}
	BusinessID

	getDescription() {
		return this.description;
	}

	getMoneyRating() {
		return this.moneyRating;
	}

	getServiceRating() {
		return this.serviceRating;
	}

	getID() {
		return this.review_id;
	}

	setBusinessId(new_business) {
		this.business = new_business; 
	}
}
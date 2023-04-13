export default class Review{
	constructor(id, userID, text, moneyRating, serviceRating, locationRating, businessID, content ) {
		this.id = id;
		this.user_id = userID;
		this.moneyRating = moneyRating;
		this.content = content;
		this.serviceRating = serviceRating;
		this.businessID = businessID;
		this.locationRating = locationRating;
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

	getText() {
		return this.text;
	}

	getRating() {
		return this.rating;
	}

	getCreatedAt() {
		return this.createdAt;
	}

	getID() {
		return this.review_id;
	}

	setBusinessId(new_business) {
		this.business = new_business; 
	}
	
	setText(new_text) {
		this.text = text;
	}

	setRating(new_rating) {
		this.rating = rating;
	}
}
import {v4 as uuidv4} from 'uuid';

class Review{
	review_id = uuidv4();

	constructor(commenter, business, text, rating, createdAt) {
		this.user_id = commenter;
		this.business = business;
		this.text = text;
		this.rating = rating;
		this.createdAt = createdAt;
	}

	getReviewId() {
		return this.review_id;
	}

	getUserId() {
		return this.user_id;
	}

	getBusinessId() {
		return this.business;
	}

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
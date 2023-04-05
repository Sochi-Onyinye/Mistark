import {v4 as uuidv4} from 'uuid';

class Review{
	review_id = uuidv4();

	constructor(commenter, business, text, m_rating, s_rating, l_rating, createdAt) {
		this.user_id = commenter;
		this.business = business;
		this.text = text;
		this.money_rating = m_rating;
		this.service_rating = s_rating;
		this.location_rating = l_rating;
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

	getMoneyRating() {
		return this.money_rating;
	}

	getServiceRating() {
		return this.service_rating;
	}

	getLocationRating() {
		return this.location_rating;
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

	setMoneyRating(new_rating) {
		this.money_rating = new_rating;
	}

	setServiceRating(new_rating) {
		this.service_rating = new_rating;
	}

	setLocationRating(new_rating) {
		this.location_rating = new_rating;
	}
}
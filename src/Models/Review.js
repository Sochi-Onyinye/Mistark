import {v4 as uuidv4} from 'uuid';

class Review{
	review_uuid = uuidv4();

	constructor(commenter, text, rating, createdAt) {
		this.commenter = commenter;
		this.text = text;
		this.rating = rating;
		this.createdAt = createdAt;
	}

	getCommenter() {
		return this.commenter;
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

	getUuid() {
		return this.review_uuid;
	}

	setText(new_text) {
		return this.text = text;
	}

	setRating(new_rating) {
		return this.rating = rating;
	}
}
package com.example.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Review {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int review_id;
	int user_id;
	String feedback;
	String movie_name;
	
	public Review(int review_id, int user_id, String feedback, String movie_name) {
		super();
		this.review_id = review_id;
		this.user_id = user_id;
		this.feedback = feedback;
		this.movie_name = movie_name;
	}
	
	public Review(int user_id, String feedback, String movie_name) {
		this.user_id = user_id;
		this.feedback = feedback;
		this.movie_name = movie_name;
	}
	
	public Review() {
		
	}

	public int getReview_id() {
		return review_id;
	}

	public void setReview_id(int review_id) {
		this.review_id = review_id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	public String getMovie_name() {
		return movie_name;
	}

	public void setMovie_name(String movie_name) {
		this.movie_name = movie_name;
	}
	
	
}

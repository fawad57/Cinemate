package com.example.bean;

public class Default_Review {

	String email;
	String feedback;
	String movieName;
	int ticketNmuber;
	
	public Default_Review(String email, String feedback, String movieName, int ticketNmuber) {
		super();
		this.email = email;
		this.feedback = feedback;
		this.movieName = movieName;
		this.ticketNmuber = ticketNmuber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	public String getMovieName() {
		return movieName;
	}

	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}

	public int getTicketNmuber() {
		return ticketNmuber;
	}

	public void setTicketNmuber(int ticketNmuber) {
		this.ticketNmuber = ticketNmuber;
	}
	
	
	
}

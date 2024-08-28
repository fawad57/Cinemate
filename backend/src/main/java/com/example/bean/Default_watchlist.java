package com.example.bean;

public class Default_watchlist {

	String email;
	String movieName;
	
	
	public Default_watchlist(String email, String movieName) {
		super();
		this.email = email;
		this.movieName = movieName;
	}

	public Default_watchlist() {

	}

	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getMovieName() {
		return movieName;
	}


	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}
	
	
}

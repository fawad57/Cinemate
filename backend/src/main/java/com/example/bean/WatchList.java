package com.example.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class WatchList {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	int user_id;
	String movieName;
	
	
	public WatchList(int id, int user_id, String movieName) {
		super();
		this.id = id;
		this.user_id = user_id;
		this.movieName = movieName;
	}
	
	public WatchList(int user_id, String movieName) {
		this.user_id = user_id;
		this.movieName = movieName;
	}

	public WatchList() {
		
	}
	
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public int getUser_id() {
		return user_id;
	}


	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}


	public String getMovieName() {
		return movieName;
	}


	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}
	
	
}

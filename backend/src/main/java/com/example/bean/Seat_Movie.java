package com.example.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Seat_Movie {

	@Id
	private int seat_id;
	private int movie_id;
	private int user_id;
	
	public Seat_Movie(int seat_id, int movie_id,int user_id) {
		this.seat_id = seat_id;
		this.movie_id = movie_id;
		this.user_id=user_id;
	}
	
	public Seat_Movie() {
		
	}
	
	public int getSeat_id() {
		return seat_id;
	}
	
	public void setSeat_id(int seat_id) {
		this.seat_id = seat_id;
	}
	
	public int getMovie_id() {
		return movie_id;
	}
	
	public void setMovie_id(int movie_id) {
		this.movie_id = movie_id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	
	
}

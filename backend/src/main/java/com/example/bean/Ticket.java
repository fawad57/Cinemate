package com.example.bean;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity 
public class Ticket {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int ticket_id;
	String MovieName;
	float price;
	int user_id;
	int seat_no;
	
	public Ticket(int ticket_id, String movieName, float price, int user_id, int seat_no ) {
		this.ticket_id = ticket_id;
		MovieName = movieName;
		this.price = price;
		this.user_id = user_id;
		this.seat_no=seat_no;
	}
	
	public Ticket(String movieName, float price, int user_id, int seat_no ) {
		MovieName = movieName;
		this.price = price;
		this.user_id = user_id;
		this.seat_no=seat_no;
	}
	
	public Ticket() {
		
	}

	public int getTicket_id() {
		return ticket_id;
	}

	public void setTicket_id(int ticket_id) {
		this.ticket_id = ticket_id;
	}

	public String getMovieName() {
		return MovieName;
	}

	public void setMovieName(String movieName) {
		MovieName = movieName;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public int getSeat_no() {
		return seat_no;
	}

	public void setSeat_no(int seat_no) {
		this.seat_no = seat_no;
	}
	
	
	
}

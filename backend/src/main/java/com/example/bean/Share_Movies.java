package com.example.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Share_Movies {

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int share_id;
	String receiving_email;
	String sending_email;
	String movieName;
	
	public Share_Movies(int share_id, String receiving_email, String sending_email, String movieName) {
		super();
		this.share_id = share_id;
		this.receiving_email = receiving_email;
		this.sending_email = sending_email;
		this.movieName = movieName;
	}

	public Share_Movies() {
		
	}
	public int getShare_id() {
		return share_id;
	}

	public void setShare_id(int share_id) {
		this.share_id = share_id;
	}

	public String getReceiving_email() {
		return receiving_email;
	}

	public void setReceiving_email(String receiving_email) {
		this.receiving_email = receiving_email;
	}

	public String getSending_email() {
		return sending_email;
	}

	public void setSending_email(String sending_email) {
		this.sending_email = sending_email;
	}

	public String getMovieName() {
		return movieName;
	}

	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}
	
	
	
}

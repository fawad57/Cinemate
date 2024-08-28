package com.example.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Seats {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int seat_no;
	
	
	public Seats(int seat_no) {
		this.seat_no = seat_no;
	}

	public Seats() {
		
	}
	
	public int getSeat_No() {
		return seat_no;
	}
}

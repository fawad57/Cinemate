package com.example.bean;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int booking_id;
	int booking_num;
	Date date;
	LocalTime time;
	int movie_id;
	int no_of_seats;
	int cinema_id;
	int hall_id;
	float price;
	int user_id;
	
	
	public Booking( int booking_num, Date date, LocalTime time, int movie_id, int no_of_seats, int cinema_id,int hall_id,
			float price, int user_id) {
		
		this.booking_num = booking_num;
		this.date = date;
		this.time = time;
		this.movie_id = movie_id;
		this.no_of_seats = no_of_seats;
		this.cinema_id = cinema_id;
		this.price = price;
		this.hall_id=hall_id;
		this.user_id=user_id;
	}
	
	public Booking(int booking_id, int booking_num, Date date, LocalTime time, int movie_id, int no_of_seats, int cinema_id,int hall_id,
			float price) {
		
		this.booking_id = booking_id;
		this.booking_num = booking_num;
		this.date = date;
		this.time = time;
		this.movie_id = movie_id;
		this.no_of_seats = no_of_seats;
		this.cinema_id = cinema_id;
		this.price = price;
		this.hall_id=hall_id;
	}
	
	public Booking() {
		
	}


	public int getBooking_id() {
		return booking_id;
	}


	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}


	public int getBooking_num() {
		return booking_num;
	}


	public void setBooking_num(int booking_num) {
		this.booking_num = booking_num;
	}


	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
	}


	public LocalTime getTime() {
		return time;
	}


	public void setTime(LocalTime time) {
		this.time = time;
	}


	public int getMovie_id() {
		return movie_id;
	}


	public void setMovie_id(int movie_id) {
		this.movie_id = movie_id;
	}


	public int getNo_of_seats() {
		return no_of_seats;
	}


	public void setNo_of_seats(int no_of_seats) {
		this.no_of_seats = no_of_seats;
	}


	public int getCinema_id() {
		return cinema_id;
	}


	public void setCinema_id(int cinema_id) {
		this.cinema_id = cinema_id;
	}


	public float getPrice() {
		return price;
	}


	public void setPrice(float price) {
		this.price = price;
	}

	public int getHall_id() {
		return hall_id;
	}

	public void setHall_id(int hall_id) {
		this.hall_id = hall_id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	
	
	
	
}

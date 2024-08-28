package com.example.bean;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalTime;
import java.util.List;

public class Default_Booking {
	int bookingNumber;
	Date date;
	LocalTime time;
	String movieName;
	List<Integer> seats;
	int cinemaId;
	int hallId;
	int tickets;
	float price;
	String user;
	
	public Default_Booking(int bookingNumber, Date date, LocalTime time, String movieName, List<Integer> seats, int cinemaId,
			int hallId, int tickets, float price, String user) {
		this.bookingNumber = bookingNumber;
		this.date = date;
		this.time = time;
		this.movieName = movieName;
		this.seats = seats;
		this.cinemaId = cinemaId;
		this.hallId = hallId;
		this.tickets = tickets;
		this.price = price;
		this.user=user;
		
	}

	public int getBookingNumber() {
		return bookingNumber;
	}

	public void setBookingNumber(int bookingNumber) {
		this.bookingNumber = bookingNumber;
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

	public String getMovieName() {
		return movieName;
	}

	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}

	public List<Integer> getSeats() {
		return seats;
	}

	public void setSeats(List<Integer> seats) {
		this.seats = seats;
	}

	public int getCinemaId() {
		return cinemaId;
	}

	public void setCinemaId(int cinemaId) {
		this.cinemaId = cinemaId;
	}

	public int getHallId() {
		return hallId;
	}

	public void setHallId(int hallId) {
		this.hallId = hallId;
	}

	public int getTickets() {
		return tickets;
	}

	public void setTickets(int tickets) {
		this.tickets = tickets;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}
	
	
	
}

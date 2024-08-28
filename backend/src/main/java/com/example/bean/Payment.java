package com.example.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int payment_id;
	int cardNumber;
	String cardName;
	float total_amount;
	int bookingNumber;
	
	public Payment(int paymenyt_id, int cardNumber, String cardName, int bookingNumber) {
		this.payment_id = paymenyt_id;
		this.cardNumber = cardNumber;
		this.cardName = cardName;
		this.bookingNumber = bookingNumber;
	}

	public int getPaymenyt_id() {
		return payment_id;
	}

	public void setPaymenyt_id(int paymenyt_id) {
		this.payment_id = paymenyt_id;
	}

	public int getCard_no() {
		return cardNumber;
	}

	public void setCard_no(int card_no) {
		this.cardNumber = card_no;
	}

	public String getCard_name() {
		return cardName;
	}

	public void setCard_name(String card_name) {
		this.cardName = card_name;
	}

	public float getTotal_amount() {
		return total_amount;
	}

	public void setTotal_amount(float total_amount) {
		this.total_amount = total_amount;
	}

	public int getBooking_Num() {
		return bookingNumber;
	}

	public void setBooking_Num(int booking_Num) {
		this.bookingNumber = booking_Num;
	}
	
	
	
	
	
}

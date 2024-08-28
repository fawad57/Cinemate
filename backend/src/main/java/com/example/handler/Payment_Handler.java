package com.example.handler;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bean.Booking;
import com.example.bean.Payment;
import com.example.bean.Seat_Movie;
import com.example.bean.Ticket;
import com.example.dao.BookingDao;
import com.example.dao.MovieDao;
import com.example.dao.PaymentDao;
import com.example.dao.Seat_MovieDao;
import com.example.dao.TicketDao;



@Service
public class Payment_Handler {

	@Autowired
	private PaymentDao pd;
	@Autowired
	private BookingDao bd;
	@Autowired
	private MovieDao md;
	@Autowired
	private Seat_MovieDao smd;
	@Autowired
	private TicketDao td;
	
	public void addpayment(Payment p) {
		float total = 0;
		int seats = 0;
		List<Booking> list = bd.getAllBooking();
		int movie_id = 0;
		int user_id = 0;
		for(int i=0;i<list.size();i++) {
			if(list.get(i).getBooking_num()==p.getBooking_Num()) {
				total = list.get(i).getPrice();
				seats=list.get(i).getNo_of_seats();
				movie_id=list.get(i).getMovie_id();
				user_id=list.get(i).getUser_id();
				
				break;
			}
		}
		float price= total;
		total = total*seats;	
		p.setTotal_amount(total);
		
		pd.addPayment(p);
		
		String m_name = md.getmovie_Name(movie_id);
		List<Seat_Movie> list2= smd.getSeat_Movie();
		List<Integer> seats_no = new ArrayList<>();
		
		for(int i=0;i<list2.size();i++) {
			if(list2.get(i).getUser_id()==user_id) {
				seats_no.add(list2.get(i).getSeat_id());
			}
		}
		for (int i=0; i<seats_no.size();i++) {
			Ticket t = new Ticket(m_name,price,user_id,seats_no.get(i));	
			td.addTicket(t);
		}
	}
	
}

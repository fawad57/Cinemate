package com.example.handler;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bean.Booking;
import com.example.bean.Default_Booking;
import com.example.bean.Seat_Movie;
import com.example.bean.Seats;
import com.example.bean.Ticket;
import com.example.dao.BookingDao;
import com.example.dao.MovieDao;
import com.example.dao.SeatDao;
import com.example.dao.Seat_MovieDao;
import com.example.dao.TicketDao;
import com.example.dao.UserDao;


@Service
public class Booking_Handler {
	@Autowired
	private SeatDao seatdao;
	@Autowired
	private BookingDao bookingdao;
	@Autowired
	private MovieDao moviedao;
	@Autowired
	private Seat_MovieDao smd;
	@Autowired
	private UserDao ud;
	@Autowired
	private TicketDao td;
	
	public Seats getSeats(int id) {
		return seatdao.getSeat(id);
	}
	
	public void create_booking(Default_Booking db) {
		
		int id = moviedao.getMovie_id(db.getMovieName());
		int u_id = ud.getuser_Id(db.getUser());
		Booking b=new Booking(db.getBookingNumber(),db.getDate(),db.getTime(),id,db.getTickets(),db.getCinemaId(),db.getHallId(),db.getPrice(),u_id);
		
		bookingdao.createBooking(b);
		
		List<Integer> seats = db.getSeats();
		//System.out.println(seats);
		for(int i=0;i<seats.size();i++) {
			//System.out.println(seats.get(i));
			Seat_Movie sm = new Seat_Movie(seats.get(i),id,u_id);
			smd.addSeatMovie(sm);
		}
	}
	
	public List<Ticket> getTickets(String email){
		int id = ud.getuser_Id(email);
		
		List<Ticket> list = td.getTickets(id);
		
		return list;
	}

}

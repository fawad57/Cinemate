package com.example.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.bean.Customer_Support;
import com.example.bean.Default_Booking;
import com.example.bean.Default_Email;
import com.example.bean.Default_Review;
import com.example.bean.Default_String;
import com.example.bean.Default_watchlist;
import com.example.bean.Payment;
import com.example.bean.Seat_Movie;
import com.example.bean.Share_Movies;
import com.example.bean.Ticket;
import com.example.bean.User;
import com.example.bean.WatchList;
import com.example.dao.MovieDao;
import com.example.dao.PaymentDao;
import com.example.dao.Seat_MovieDao;
import com.example.dao.Sharie_MovieDao;
import com.example.dao.UserDao;
import com.example.dao.WatchlistDao;
import com.example.handler.Booking_Handler;
import com.example.handler.Feedback_Handler;
import com.example.handler.Payment_Handler;

@CrossOrigin(origins = "http://localhost:5173", maxAge = 3600)
@RestController
public class Controller {
	
	@Autowired
	private UserDao userdao;
	@Autowired
	private MovieDao moviedao;
	@Autowired
	private Seat_MovieDao smd;
	@Autowired
	private Booking_Handler bh;
	@Autowired
	private Payment_Handler ph;
	@Autowired
	private Feedback_Handler fh;
	@Autowired
	private Sharie_MovieDao smds; 
	@Autowired
	private WatchlistDao wld;
	
	@GetMapping("/")
	public String home() {
		return "home";
	}
	
	public List<User> getAllUser() {
		List<User> users = userdao.getAllUser();
		return users;
	}
	
	@PostMapping("/signup")
	public String signup(@RequestBody User u) {
		userdao.addUser(u);
		return "User added succesfully";
	}
	
	@PostMapping("/login")
	public String login(@RequestBody User u) {
		List<User> users = getAllUser();

		User v = null;
		for(int i=0; i<users.size(); i++) {

			if(users.get(i).getEmail().equals( u.getEmail()) && users.get(i).getPassword().equals(u.getPassword())) {
				v = users.get(i);
			}
		}
		if(v==null) {
			return "Incorrect credential";
		}
		else {
			return "Successfully login" ;
		}
		
	}
	
	@PostMapping("/booked-seats")
	public List<Integer> getSeats(@RequestBody Default_String s){
		int id = moviedao.getMovie_id(s.getName());
		
		List<Seat_Movie>  list = smd.getSeat_Movie();
		System.out.println(id);
		List<Integer> list2 = new ArrayList<>();

		for(int i=0;i<list.size();i++) {
			if(list.get(i).getMovie_id()==id) {
				list2.add(list.get(i).getSeat_id());
			}
		}
		
		
		
		return list2;
	}
	
	@PostMapping("/book")
	public String createBooking(@RequestBody Default_Booking b) {
		bh.create_booking(b);
		return "Booked Successfully";
	}
	
	@PostMapping("/payment")
	public String createPayment(@RequestBody Payment p) {
		ph.addpayment(p);
		return "Payment Successfully";
	}
	
	@PostMapping("/tickets")
	public List<Ticket> getTickets(@RequestBody Default_Email s){
		
		System.out.println(s.getEmail());
		
		List<Ticket> list = bh.getTickets(s.getEmail());
		
		for (int i = 0; i < list.size(); i++) {
			System.out.println(list.get(i).getSeat_no());
			System.out.println(list.get(i).getMovieName());	
		}
		
		return list;
	}
	
	@PostMapping("/reviews")
	public void createReview(@RequestBody Default_Review r) {
		
		fh.addReview(r);
	}
	
	@PostMapping("/support")
	public void createQuery(@RequestBody Customer_Support cs) {
		fh.addQuery(cs);
	}
	
	@PostMapping ("/share")
	public void ShareMovie(@RequestBody Share_Movies sm) {
		smds.createSharing(sm);
	}
	
	@PostMapping("/watchlist")
	public void CreateWatchlist(@RequestBody Default_watchlist dw) {
		int id = userdao.getuser_Id(dw.getEmail());
		
		WatchList w = new WatchList(id,dw.getMovieName());
		
		wld.addWatchlist(w);
	}
	
	@PostMapping("/get-watchlist")
	public List<String> getmovies(@RequestBody Default_Email e){
		List<String> list = wld.getmovies(e.getEmail());
		
		return list;
	}
}

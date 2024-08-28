package com.example.dao;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.example.bean.Booking;

@Repository
interface BookingDaoService extends JpaRepository<Booking, Integer>{
	
}

@Service
public class BookingDao {

	@Autowired
	private BookingDaoService bds;
	
	public void createBooking(Booking b) {
		bds.save(b);
	}
	
	public List<Booking> getAllBooking(){
		return bds.findAll();
		
	}
}

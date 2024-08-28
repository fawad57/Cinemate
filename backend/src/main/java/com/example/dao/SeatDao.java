package com.example.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.example.bean.Seats;

@Repository
interface SeatDaoService extends JpaRepository<Seats, Integer>{
	
}

@Service
public class SeatDao {
	
	@Autowired
	private SeatDaoService seatDao;
	
	public List<Seats> getAllSeat(){
		return seatDao.findAll();
	}
	
	public Seats getSeat(int id) {
		return seatDao.findById(id).get();
	}
}

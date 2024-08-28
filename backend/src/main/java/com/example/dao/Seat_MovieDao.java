package com.example.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.example.bean.Seat_Movie;



@Repository
interface Seat_MovieDaoService extends JpaRepository<Seat_Movie, Integer>{
	
}

@Service
public class Seat_MovieDao {

	@Autowired
	private Seat_MovieDaoService smd;
	
	public List<Seat_Movie> getSeat_Movie(){
		return smd.findAll();
	}
	public void addSeatMovie(Seat_Movie sm) {
		smd.save(sm);
	}
}

package com.example.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.example.bean.Seats;
import com.example.bean.Share_Movies;

@Repository
interface Sharie_MovieDaoService extends JpaRepository<Share_Movies, Integer>{
	
}

@Service
public class Sharie_MovieDao {

	@Autowired
	private Sharie_MovieDaoService smds;
	
	public void createSharing(Share_Movies sm) {
		smds.save(sm);
	}
}

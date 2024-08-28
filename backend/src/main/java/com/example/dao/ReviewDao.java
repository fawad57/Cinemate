package com.example.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.example.bean.Review;


@Repository
interface ReviewDaoService extends JpaRepository<Review, Integer>{
	
}

@Service
public class ReviewDao {
	
	@Autowired
	private ReviewDaoService rds;
	
	public void addReview(Review r) {
		rds.save(r);
	}

}

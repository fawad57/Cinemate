package com.example.handler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bean.Customer_Support;
import com.example.bean.Default_Review;
import com.example.bean.Review;
import com.example.dao.Customer_SupportDao;
import com.example.dao.ReviewDao;
import com.example.dao.UserDao;

@Service
public class Feedback_Handler {

	@Autowired
	private ReviewDao rd;
	@Autowired
	private UserDao ud;
	@Autowired
	private Customer_SupportDao csd;
	
	public void addReview(Default_Review dr) {
		int id = ud.getuser_Id(dr.getEmail());
		
		Review r = new Review(id,dr.getFeedback(),dr.getMovieName());
		rd.addReview(r);
	}
	
	public void addQuery(Customer_Support cs) {
		csd.addCustomer_Support(cs);
	}
}

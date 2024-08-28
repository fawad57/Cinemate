package com.example.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.example.bean.Payment;



@Repository
interface PaymentDaoService extends JpaRepository<Payment, Integer>{
	
}

@Service
public class PaymentDao {

	@Autowired
	private PaymentDaoService pds;
	
	public void addPayment(Payment p) {
		
		System.out.println(p);
		pds.save(p);
	}
	
	
}

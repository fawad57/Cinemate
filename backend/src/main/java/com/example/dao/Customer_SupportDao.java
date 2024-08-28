package com.example.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.example.bean.Customer_Support;

@Repository
interface Customer_SupportDaoService extends JpaRepository<Customer_Support, Integer>{
	
}

@Service
public class Customer_SupportDao {
	
	@Autowired
	private Customer_SupportDaoService csd;
	
	public void addCustomer_Support(Customer_Support cs) {
		csd.save(cs);
	}

}

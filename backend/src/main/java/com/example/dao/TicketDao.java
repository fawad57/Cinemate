package com.example.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.example.bean.Ticket;


@Repository
interface TicketDaoService extends JpaRepository<Ticket, Integer>{
	
}

@Service
public class TicketDao {

	@Autowired
	private TicketDaoService tds;
	
	public List<Ticket> getAllTickets(){
		return tds.findAll();
	}
	
	public List<Ticket> getTickets(int id){
		
		System.out.println(id);
		
		List<Ticket> list = getAllTickets();
		List<Ticket> list2 = new ArrayList<>();
		
		for(int i=0;i<list.size();i++) {
			if(list.get(i).getUser_id()==id) {
				list2.add(list.get(i));
			}
		}
	
		
		return list2;
	}
	
	public void addTicket(Ticket t) {
		tds.save(t);
	}
}

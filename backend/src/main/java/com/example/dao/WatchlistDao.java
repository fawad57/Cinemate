package com.example.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.example.bean.WatchList;

@Repository
interface WatchlistDaoService extends JpaRepository<WatchList, Integer>{
	
}

@Service
public class WatchlistDao {

	@Autowired
	private WatchlistDaoService wds;
	@Autowired
	private UserDao ud;
	
	public List<WatchList> getallWatchList(){
		return wds.findAll();
	}
	
	public List<String> getmovies(String email){
		
		int id = ud.getuser_Id(email);
		List<WatchList> list = getallWatchList();
		
		List<String> list2 = new ArrayList<>();
		
		for (int i=0;i<list.size();i++) {
			if(list.get(i).getUser_id()==id) {
				System.out.println(1);
				list2.add(list.get(i).getMovieName());
			}
		}
		
		return list2;
	}
	
	public void addWatchlist(WatchList wl) {
		wds.save(wl);
	}
}

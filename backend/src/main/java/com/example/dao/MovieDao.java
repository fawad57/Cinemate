package com.example.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.example.bean.Movies;


@Repository
interface MovieDaoService extends JpaRepository<Movies, Integer>{
	
}

@Service
public class MovieDao {

	@Autowired
	private MovieDaoService MDS;
	
	public List<Movies> getAllMovies(){
		return MDS.findAll();
	}
	
	public int getMovie_id(String name) {
		
		List<Movies> movies=getAllMovies();
		int id=0;
		System.out.println(name);
		for(int i=0;i<movies.size();i++) {
		//	System.out.println(movies.get(i).getName());
			if(movies.get(i).getName().equals(name)) {
				id=movies.get(i).getMovie_id();
				break;
			}
		}
		return id;
	}
	
	public String getmovie_Name(int id) {
		
		List<Movies> movies=getAllMovies();
		String name="";
		
		for(int i=0;i<movies.size();i++) {
			if(movies.get(i).getMovie_id()==id) {
				name=movies.get(i).getName();
				break;
			}
		}
		
		return name;
	}
}

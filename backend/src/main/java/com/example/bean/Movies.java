package com.example.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Movies {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String movie_name;
	
	public Movies(int movie_id, String name) {
		this.id = movie_id;
		this.movie_name = name;
	}
	
	public Movies() {
		
	}
	
	public int getMovie_id() {
		return id;
	}
	
	public void setMovie_id(int movie_id) {
		this.id = movie_id;
	}
	
	public String getName() {
		return movie_name;
	}
	
	public void setName(String name) {
		this.movie_name = name;
	}
	
	
	
}

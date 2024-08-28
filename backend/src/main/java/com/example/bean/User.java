package com.example.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int user_id;
	private String name;
	private String email;
	private String Password;
	
	public User(int id,String n,String e,String p) {
		this.user_id=id;
		this.name=n;
		this.Password=p;
		this.email=e;
	}
	
	public User() {
		
	}
	
	public int getID() {
		return user_id;
	}
	
	public String getName() {
		return name; 
	}
	
	public String getEmail() {
		return email;
	}
	
	public String getPassword() {
		return Password;
	}
	
	public void setName(String name) {
		this.name=name;
	}
	
	public void setPassword(String pass) {
		Password=pass;
	}
}

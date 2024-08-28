package com.example.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.example.bean.Movies;
import com.example.bean.User;

@Repository
interface UserDaoService extends JpaRepository<User, Integer>{
	
}

@Service
public class UserDao {
	
	@Autowired
	private UserDaoService userDao;
	
	public List<User> getAllUser(){
		return userDao.findAll();
	}
	
	public User getUser(int id) {
		return userDao.findById(id).get();
	}
	
	public void addUser(User user) {
		userDao.save(user);
	}
	
	public void DeleteUser(int id) {
		userDao.deleteById(id);
	}
	
	public int getuser_Id(String email) {
		
		List<User> user = getAllUser(); 
		int id=0;
		for(int i=0;i<user.size();i++) {
			
			if(user.get(i).getEmail().equals(email)) {
				id = user.get(i).getID();
				break;
			}
		}
		return id;
	}

}

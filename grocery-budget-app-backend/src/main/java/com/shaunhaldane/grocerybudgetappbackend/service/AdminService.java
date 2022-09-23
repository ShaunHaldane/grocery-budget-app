package com.shaunhaldane.grocerybudgetappbackend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shaunhaldane.grocerybudgetappbackend.DTO.UserDTO;
import com.shaunhaldane.grocerybudgetappbackend.exception.ResourceNotFoundException;
import com.shaunhaldane.grocerybudgetappbackend.model.User;
import com.shaunhaldane.grocerybudgetappbackend.repository.UserRepository;


@Service
public class AdminService {
	
	@Autowired
	private UserRepository userRepository;
	
	public List<UserDTO> getAllUsers() {
		List<User> users = userRepository.findAll();
		return users.stream().map(AdminService::toUserDTO).collect(Collectors.toList());
	}
	
	public void deleteUser(Long id) {
		User existingUser = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not found for the id:"+id));
		userRepository.delete(existingUser);
	}
	
	private static UserDTO toUserDTO(User user) {
		return new UserDTO(user.getUsername(), user.getEmail());
	}
}
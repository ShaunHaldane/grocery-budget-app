package com.shaunhaldane.grocerybudgetapp.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.shaunhaldane.grocerybudgetapp.DTO.UserDTO;
import com.shaunhaldane.grocerybudgetapp.entity.User;
import com.shaunhaldane.grocerybudgetapp.exceptions.ResourceNotFoundException;
import com.shaunhaldane.grocerybudgetapp.exceptions.UserExistsException;
import com.shaunhaldane.grocerybudgetapp.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Autowired
	private UserRepository userRepository;
	
	public User createUser(UserDTO user) {
		if (userRepository.existsByEmail(user.getEmail())) {
			throw new UserExistsException("User is already register with email:"+user.getEmail());
		}
		User newUser = new User();
		BeanUtils.copyProperties(user, newUser);
		newUser.setPassword(bcryptEncoder.encode(newUser.getPassword()));
		return userRepository.save(newUser);
	}

	public User readUser(Long id) {
		return userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found for the id:"+id));
	}

	public User updateUser(UserDTO user, Long id) {
		User existingUser = readUser(id);
		existingUser.setName(user.getName() != null ? user.getName() : existingUser.getName());
		existingUser.setEmail(user.getEmail() != null ? user.getEmail() : existingUser.getEmail());
		existingUser.setPassword(user.getPassword() != null ? bcryptEncoder.encode(user.getPassword()) : existingUser.getPassword());
		return userRepository.save(existingUser);
	}

	public void deleteUser(Long id) {
		User existingUser = readUser(id);
		userRepository.delete(existingUser);
	}

}

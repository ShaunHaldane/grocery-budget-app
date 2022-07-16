package com.shaunhaldane.grocerybudgetapp.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.shaunhaldane.grocerybudgetapp.DTO.AuthDTO;
import com.shaunhaldane.grocerybudgetapp.DTO.UserDTO;
import com.shaunhaldane.grocerybudgetapp.entity.User;
import com.shaunhaldane.grocerybudgetapp.service.UserService;

@RestController
public class AuthController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/login")
	public ResponseEntity<HttpStatus> login(@RequestBody AuthDTO authDTO) {
		Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authDTO.getEmail(), authDTO.getPassword()));
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		return new ResponseEntity<HttpStatus>(HttpStatus.OK);
	}
	
	@PostMapping("/register")
	public ResponseEntity<User> save(@Valid @RequestBody UserDTO user) {
		return new ResponseEntity<User>(userService.createUser(user), HttpStatus.CREATED);
	}
}

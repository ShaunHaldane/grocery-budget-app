package com.shaunhaldane.grocerybudgetapp.DTO;

import java.util.Date;

import lombok.Data;

@Data
public class ErrorDTO {
	
	private Integer statusCode;
	
	private String message;
	
	private Date timestamp;
}

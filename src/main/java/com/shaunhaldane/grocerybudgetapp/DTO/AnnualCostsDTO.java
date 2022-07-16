package com.shaunhaldane.grocerybudgetapp.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AnnualCostsDTO {
	
	private double price;
	private int month;
	private int year;
	
	public AnnualCostsDTO(double price, int month, int year) {
		this.price = price;
		this.month = month;
		this.year = year;
	}

}

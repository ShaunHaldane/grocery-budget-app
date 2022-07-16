package com.shaunhaldane.grocerybudgetapp.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class TotalSpendOnIndividualItemDTO {
	
	private double price;
	private String name;
	
	public TotalSpendOnIndividualItemDTO(double price, String name) {
		this.price = price;
		this.name = name;
	}

}

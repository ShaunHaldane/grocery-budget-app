package com.shaunhaldane.grocerybudgetappbackend.DTO;


public class AnnualCostsDTO {
	
	private double price;
	private int month;
	private int year;
	
	public AnnualCostsDTO() {
	}

	public AnnualCostsDTO(double price, int month, int year) {
		this.price = price;
		this.month = month;
		this.year = year;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getMonth() {
		return month;
	}

	public void setMonth(int month) {
		this.month = month;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

}

package com.shaunhaldane.grocerybudgetapp.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Item {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@NotBlank(message = "Item name is required")
	private String name;
	private double price;
	@Column(name="date_expired")
	private LocalDate dateExpired;
	@Column(name="date_purchased")
	private LocalDate datePurchased;
	@Column(name="date_removed")
	private LocalDate dateRemoved;
	@Column(name="disposal_type")
	private String disposalType;

}

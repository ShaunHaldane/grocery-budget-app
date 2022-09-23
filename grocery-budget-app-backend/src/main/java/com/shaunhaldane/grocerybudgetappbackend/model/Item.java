package com.shaunhaldane.grocerybudgetappbackend.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
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
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id", nullable = false)
	@JsonIgnore
	private User user;

	public Item() {
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public LocalDate getDateExpired() {
		return dateExpired;
	}

	public void setDateExpired(LocalDate dateExpired) {
		this.dateExpired = dateExpired;
	}

	public LocalDate getDatePurchased() {
		return datePurchased;
	}

	public void setDatePurchased(LocalDate datePurchased) {
		this.datePurchased = datePurchased;
	}

	public LocalDate getDateRemoved() {
		return dateRemoved;
	}

	public void setDateRemoved(LocalDate dateRemoved) {
		this.dateRemoved = dateRemoved;
	}

	public String getDisposalType() {
		return disposalType;
	}

	public void setDisposalType(String disposalType) {
		this.disposalType = disposalType;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
}

package com.shaunhaldane.grocerybudgetappbackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.shaunhaldane.grocerybudgetappbackend.DTO.AnnualCostsDTO;
import com.shaunhaldane.grocerybudgetappbackend.DTO.TotalSpendOnIndividualItemDTO;
import com.shaunhaldane.grocerybudgetappbackend.exception.ResourceNotFoundException;
import com.shaunhaldane.grocerybudgetappbackend.model.Item;
import com.shaunhaldane.grocerybudgetappbackend.repository.ItemRepository;
import com.shaunhaldane.grocerybudgetappbackend.security.service.UserDetailsServiceImpl;


@Service
public class ItemService {
	
	@Autowired
	private ItemRepository itemRepo;
	
	@Autowired
	private UserDetailsServiceImpl userService;

	
	/////Dashboard
	
	// Get all items where disposal type = none
	public Iterable<Item> getAllItemsInStock() {
		return itemRepo.getAllItemsInStock(
				userService.getLoggedInUser().getId());
	}

	// Waste or use item
	public Item editItem(long id, Item item) {
		Item existingItem = getItemById(id);
		existingItem.setName(item.getName() != null ? item.getName() : existingItem.getName());
		existingItem.setPrice(item.getPrice() != 0 ? item.getPrice() : existingItem.getPrice());
		existingItem.setDatePurchased(item.getDatePurchased() != null ? item.getDatePurchased() : existingItem.getDatePurchased());
		existingItem.setDateRemoved(item.getDateRemoved() != null ? item.getDateRemoved() : existingItem.getDateRemoved());
		existingItem.setDisposalType(item.getDisposalType() != null ? item.getDisposalType() : existingItem.getDisposalType());
		return itemRepo.save(existingItem);
	}
	
	// Delete item
	public void deleteItemById(Long id) {
		Item item = getItemById(id);
		itemRepo.delete(item);
	}
	
	// Get single item by id for logged in user
	public Item getItemById(Long id) {
		Optional<Item> item = itemRepo.findByUserIdAndId(userService.getLoggedInUser().getId(), id);
		if (item.isPresent()) {
			return item.get();
		}
		throw new ResourceNotFoundException("You have no item with id: " + id);
	}
	
	// Add new item
	public Item saveItem(Item item) {
		item.setUser(userService.getLoggedInUser());
		return itemRepo.save(item);
		}

	
	///// Financial data
	public List<AnnualCostsDTO> getTotalSpentPerMonthForYear(int year) {
		return itemRepo.getTotalSpentPerMonthForYear(year, userService.getLoggedInUser().getId());
	}
	
	public List<AnnualCostsDTO> getTotalWastedPerMonthForYear(int year) {
		return itemRepo.getTotalWastedPerMonthForYear(year, userService.getLoggedInUser().getId());
	}
	
	public List<AnnualCostsDTO> getTotalUsedPerMonthForYear(int year) {
		return itemRepo.getTotalUsedPerMonthForYear(year, userService.getLoggedInUser().getId());
	}
	
	public List<TotalSpendOnIndividualItemDTO> getTotalSpentForAllItems() {
		return itemRepo.getTotalSpentForAllItems(userService.getLoggedInUser().getId());
	}
	
	public List<TotalSpendOnIndividualItemDTO> getTotalWastedForAllItems() {
		return itemRepo.getTotalWastedForAllItems(userService.getLoggedInUser().getId());
	}
	
	public List<TotalSpendOnIndividualItemDTO> getTotalUsedForAllItems() {
		return itemRepo.getTotalUsedForAllItems(userService.getLoggedInUser().getId());
	}
}

package com.shaunhaldane.grocerybudgetappbackend.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shaunhaldane.grocerybudgetappbackend.model.ERole;
import com.shaunhaldane.grocerybudgetappbackend.model.Role;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	
	Optional<Role> findByName(ERole name);
}

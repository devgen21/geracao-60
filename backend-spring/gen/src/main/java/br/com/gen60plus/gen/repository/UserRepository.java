package br.com.gen60plus.gen.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.gen60plus.gen.models.User;

@Repository
public interface UserRepository extends JpaRepository < User,Long>{
	public List<User> findAllByUsernameContainingIgnoreCase(String username);
	public List<User> findAllByEmailContainingIgnoreCase(String email);
}

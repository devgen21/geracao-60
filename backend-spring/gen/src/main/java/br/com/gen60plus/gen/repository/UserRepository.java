package br.com.gen60plus.gen.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.gen60plus.gen.models.User;


public interface UserRepository extends JpaRepository <User,Long>{
	 List<User> findAllByUsernameContainingIgnoreCase(String username);
	 List<User> findAllByEmailContainingIgnoreCase(String email);
	 Optional<User> findAllByUser(String user);
}

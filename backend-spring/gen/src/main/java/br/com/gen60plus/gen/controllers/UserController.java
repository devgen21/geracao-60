package br.com.gen60plus.gen.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.gen60plus.gen.models.User;
import br.com.gen60plus.gen.repository.UserRepository;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins="*", allowedHeaders="*")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	
    @GetMapping
    public ResponseEntity<List<User>> GetAll(){
        return ResponseEntity.ok(userRepository.findAll());
    }
    
	@GetMapping("/{id}")
	public ResponseEntity<User> GetById (@PathVariable long id){
		return userRepository.findById(id)
			.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	@GetMapping("/username/{username}")
	public ResponseEntity<List<User>> GetByUsername(@PathVariable String username){
		return ResponseEntity.ok(userRepository.findAllByUsernameContainingIgnoreCase(username));
	}
	@GetMapping("/email/{email}")
	public ResponseEntity<List<User>> GetByEmail(@PathVariable String email){
		return ResponseEntity.ok(userRepository.findAllByEmailContainingIgnoreCase(email));
	}
	@PostMapping 
	public ResponseEntity<User> post(@RequestBody User user){
		return ResponseEntity.status(HttpStatus.CREATED).body(userRepository.save(user));
	}
	@PutMapping 
	public ResponseEntity<User> put(@RequestBody User user){
		return ResponseEntity.status(HttpStatus.OK).body(userRepository.save(user));
	}
	@DeleteMapping("/{id}")
	public void delete(@PathVariable long id) {
		userRepository.deleteById(id);
	}
}

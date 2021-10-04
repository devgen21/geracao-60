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

import br.com.gen60plus.gen.models.Theme;
import br.com.gen60plus.gen.repository.ThemeRepository;

@RestController
@RequestMapping("/temas")
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class ThemeController {
	
	@Autowired
	private ThemeRepository repository;
	
	//endpoints
		
	@GetMapping 
	public ResponseEntity<List<Theme>> GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}	
	
	@GetMapping ("/{id}")
	public ResponseEntity<Theme> GetByIdTheme(@PathVariable long id){
		return repository.findById(id)
			.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity
					.notFound().build());
	}
	
	@GetMapping("/titulo /{titulo}")
	public ResponseEntity<List<Theme>> GetByTituloTheme(@PathVariable String title){
		return ResponseEntity.ok(repository.findAllByTitleContainingIgnoreCase(title));
	}
	
	@GetMapping("/descrição /{descrição}")
	public ResponseEntity<List<Theme>> GetByDescricaoTheme(@PathVariable String description){
		return ResponseEntity.ok(repository.findAllByTitleContainingIgnoreCase(description));
	}
	
	@GetMapping("/hashtags /{hashtags}")
	public ResponseEntity<List<Theme>> GetByHashtagsTheme(@PathVariable String hashtags){
		return ResponseEntity.ok(repository.findAllByTitleContainingIgnoreCase(hashtags));
	}
	
	@PostMapping
	public ResponseEntity<Theme> post(@RequestBody Theme theme){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(theme));
	}
	
	@PutMapping
	public ResponseEntity<Theme> put(@RequestBody Theme theme) {
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(theme));
	}

	@DeleteMapping("/{id}")
	public void delete (@PathVariable long id) {
		repository.deleteById(id);
	}
	
}










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

import br.com.gen60plus.gen.models.Post;
import br.com.gen60plus.gen.models.Theme;
import br.com.gen60plus.gen.repository.PostRepository;

@RestController
@RequestMapping("/feed")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PostController {

	 	@Autowired
	    private PostRepository repository;

	    //Busca todas postagens
	    @GetMapping
	    public ResponseEntity<List<Post>> GetAll(){
	        return ResponseEntity.ok(repository.findAll());
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Post> GetById(@PathVariable long id){
	        return repository.findById(id)
	                .map(resp -> ResponseEntity.ok(resp))
	                .orElse(ResponseEntity.notFound().build());
	    }

	    @GetMapping("/title/{title}")
		public ResponseEntity<List<Post>> GetByTitleTheme(@PathVariable String title){
			return ResponseEntity.ok(repository.findAllByTitleContainingIgnoreCase(title));
		}

	    @GetMapping("/description/{description}")
		public ResponseEntity<List<Post>> GetByDescriptionTheme(@PathVariable String description){
			return ResponseEntity.ok(repository.findAllByDescriptionContainingIgnoreCase(description));
		}
	    
	    @GetMapping("/author/{author}")
		public ResponseEntity<List<Post>> GetByAuthorTheme(@PathVariable String author){
			return ResponseEntity.ok(repository.findAllByAuthorContainingIgnoreCase(author));
		}
	    
		
		@PostMapping
		public ResponseEntity<Post> post(@RequestBody Post post){
			return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(post));
		}
	    
	    @PutMapping
	    public ResponseEntity<Post> put (@RequestBody Post post){
	        return ResponseEntity.status(HttpStatus.OK).body(repository.save(post));
	    }
 
	    @DeleteMapping("/{id}")
	    public void delete(@PathVariable long id) {
	        repository.deleteById(id);
	    }
	
}

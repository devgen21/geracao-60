package br.com.gen60plus.gen.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/demo")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DemoController {
	
	@GetMapping
	public ResponseEntity<String> demo() {
		return ResponseEntity.ok("Working v1 ...");
	}	
}

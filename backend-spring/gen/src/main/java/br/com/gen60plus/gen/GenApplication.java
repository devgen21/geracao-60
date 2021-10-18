package br.com.gen60plus.gen;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * 
 * @author Cassia, Felipe, Joice, Paulo
 * @version 0.0.1
 * @apiNote A aplicação Gen 60 plus é uma Api Rest criada durante o bootcamp da Generation.
 *
 */

@SpringBootApplication
@RestController
@RequestMapping("/")
public class GenApplication {
	
	@GetMapping
	public ModelAndView swaggerUi() {
		return new ModelAndView("redirect:/swagger-ui/");
	}

	
	public static void main(String[] args) {
		SpringApplication.run(GenApplication.class, args);
	}
}

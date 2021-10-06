package br.com.gen60plus.gen.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@JsonIgnoreProperties("hibernateLazyInitializer")
@Entity
@Table (name = "tb_theme")
public class Theme {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull(message = "Titulo nao pode estar vazio")
	@Size(min = 2, max = 20, message = "Minimo 2 caracteres maximo 20")
	@Column(name = "Título")
	private String title;
	
	@NotNull(message = "Descricao nao pode estar vazio")
	@Size(min = 10, max = 40, message = "Minimo 10 caracteres maximo 40")
	@Column(name = "Descrição")
	private String description;
	
	@NotNull(message = "Hashtags nao pode estar vazio")
	@Size(min = 2, max = 40, message = "Minimo 2 caracteres maximo 10")
	@Column(name = "Hashtags")
	private String hashtags;
	
	@OneToMany(mappedBy = "theme", fetch = FetchType.LAZY)
	private List<Post> post;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getHashtags() {
		return hashtags;
	}

	public void setHashtags(String hashtags) {
		this.hashtags = hashtags;
	}
	
	
		
	
}

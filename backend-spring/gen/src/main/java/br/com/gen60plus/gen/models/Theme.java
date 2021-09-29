package br.com.gen60plus.gen.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table (name = "tb_theme")
public class Theme {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	@Size(min = 10, max = 100)
	@JoinColumn(name = "Título")
	private String title;
	
	@NotNull
	@Size(min = 10, max = 100)
	@JoinColumn(name = "Descrição")
	private String description;
	
	/*
	 * @OneToMany(mappedBy = "theme", cascade = CascadeType.ALL)
		@JsonIgnoreProperties("theme")
		private List<Post> post;
	 */

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
		
	
}

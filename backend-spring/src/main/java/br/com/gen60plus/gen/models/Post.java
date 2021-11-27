package br.com.gen60plus.gen.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="tb_post")
public class Post {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull(message = "Titulo nao pode estar vazio")
	@Size(min = 5, max = 30, message = "Minimo 5 caracteres maximo 30")
	@Column(name = "titulo")
	private String title;
	
	@NotNull(message = "Descrição nao pode estar vazio")
	@Size(min = 10, max = 200, message = "Minimo 10 caracteres maximo 200")
	@Column(name = "descricao")
	private String description;
	
	@Column(name = "data_Postagem")
	@Temporal(TemporalType.TIMESTAMP)
	private Date data = new java.sql.Date(System.currentTimeMillis());
	
	@Column(name = "imagem")
	private String image;

	@ManyToOne
	@JoinColumn(name = "theme_id")
	@JsonIgnoreProperties("post")
	private Theme theme;
	
	@JoinColumn(name = "user_id")
	@ManyToOne
	@JsonIgnoreProperties("post")
	private User user;

	
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

	public Theme getTheme() {
		return theme;
	}

	public void setTheme(Theme theme) {
		this.theme = theme;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
	
	
}

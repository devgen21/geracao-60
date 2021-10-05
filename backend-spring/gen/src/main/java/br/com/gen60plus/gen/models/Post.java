package br.com.gen60plus.gen.models;

import java.util.Date;
import java.util.List;

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
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name="tb_post")
public class Post {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull(message = "Titulo nao pode estar vazio")
	@Size(min = 5, max = 30, message = "Minimo 5 caracteres maximo 30")
	@Column(name = "Titulo")
	private String title;
	
	@NotNull(message = "Descrição nao pode estar vazio")
	@Size(min = 10, max = 200, message = "Minimo 10 caracteres maximo 200")
	@Column(name = "Descrição")
	private String description;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "Data_Postagem")
	private Date date = new java.sql.Date(System.currentTimeMillis());
	
	@NotNull(message = "Autor nao pode estar vazio")
	@Size(min = 4, max = 20, message = "Minimo 4 caracteres maximo 20")
	@Column(name = "Autor")
	private String author;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnoreProperties("tb_post")
	@JoinColumn(name = "theme_id")
	private Theme theme;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnoreProperties("tb_post")
	@JoinColumn(name = "user_id")
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

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
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
	
	
}

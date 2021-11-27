package br.com.gen60plus.gen.models;

import org.springframework.security.core.userdetails.UserDetails;

public class UserLogin {

	private long id;
	private String username;
	private String password;
	private String email;
	private String token;
	private UserDetails details;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public UserDetails getDetails() {
		return details;
	}

	public void setDetails(UserDetails details) {
		this.details = details;
	}

}

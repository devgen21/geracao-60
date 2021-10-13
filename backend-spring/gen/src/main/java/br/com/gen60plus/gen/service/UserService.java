package br.com.gen60plus.gen.service;

import java.nio.charset.Charset;
import java.util.List;
import java.util.Optional;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.gen60plus.gen.models.User;
import br.com.gen60plus.gen.models.UserLogin;
import br.com.gen60plus.gen.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;

	public User signUp(User user) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

		String passwordEncoder = encoder.encode(user.getPassword());
		user.setPassword(passwordEncoder);
		return repository.save(user);
	}

	public List<User> userList() {
		return repository.findAll();
	}

	public Optional<UserLogin> signIn(Optional<UserLogin> userLogin) {

		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		Optional<User> user = repository.findAllByUsername(userLogin.get().getUsername());

		if (user.isPresent()) {
			if (encoder.matches(userLogin.get().getPassword(), user.get().getPassword())) {

				String auth = userLogin.get().getUsername() + ":" + userLogin.get().getPassword();
				byte[] encodeAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
				String authHeader = "Basic" + new String(encodeAuth);

				userLogin.get().setToken(authHeader);
				userLogin.get().setUsername(user.get().getUsername());
				userLogin.get().setPassword(user.get().getPassword());

				return userLogin;
			}
		}
		return null;
	}

}

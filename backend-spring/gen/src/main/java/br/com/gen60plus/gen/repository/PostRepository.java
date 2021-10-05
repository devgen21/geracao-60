package br.com.gen60plus.gen.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.gen60plus.gen.models.Post;


@Repository
public interface PostRepository extends JpaRepository <Post, Long>{
	public List<Post> findAllByDescriptionContainingIgnoreCase(String description);
	public List<Post> findAllByTitleContainingIgnoreCase(String title);
	public List<Post> findAllByAuthorContainingIgnoreCase(String author);
}
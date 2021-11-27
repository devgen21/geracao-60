import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/Post';
import { AlertasService } from 'src/app/service/alertas.service';
import { PostService } from 'src/app/service/post.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {

  post: Post = new Post();
  idPost: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
    private alertas: AlertasService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
 
    if (environment.token == '') {
      this.alertas.showAlertInfo('Seu token expirou! ');
      this.router.navigate(['/entrar']);
    }
  
    this.idPost = this.route.snapshot.params['id'];
    this.findByIdPost(this.idPost);
  }

  findByIdPost(id: number) {
    this.postService.getByIdPostagem(this.idPost).subscribe((resp: Post) => {
      this.post = resp;
    });
  }

  apagar() {
    this.postService.deletePostagem(this.idPost).subscribe(() => {
      this.alertas.showAlertSuccess('Post Apagado!!');
      this.router.navigate(['/feed']);
    });
  }

}

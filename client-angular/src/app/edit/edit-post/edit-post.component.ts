import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/Post';
import { Theme } from 'src/app/model/Theme';
import { AlertasService } from 'src/app/service/alertas.service';
import { PostService } from 'src/app/service/post.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  post: Post = new Post();

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute,
    private alertas: AlertasService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    
    if (environment.token == '') {
      this.alertas.showAlertInfo('Seu token expirou, faça o login novamente.');
      this.router.navigate(['/feed']);
    }
  
    let idPost = this.route.snapshot.params['id'];
    this.findAllPost(idPost);
  }

  atualizar() {
    this.postService.putPostagem(this.post).subscribe(
      (resp: Post) => {
        this.post = resp;
        this.alertas.showAlertSuccess('Post atualizado!');
        this.router.navigate(['/feed']);
      },
      (err) => {
        if (err.status == 400) {
          this.alertas.showAlertDanger(
            'Esse post não pode ser atualizado, pois já pertence a uma postagem'
          );
          this.router.navigate(['/feed']);
        }
      }
    );
  }

  findAllPost(id: number) {
    this.postService.getByIdPostagem(id).subscribe((resp: Post) => {
      this.post = resp;
    });
  }
}

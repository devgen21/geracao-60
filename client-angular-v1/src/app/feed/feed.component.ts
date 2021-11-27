import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Post } from '../model/Post';
import { Theme } from '../model/Theme';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostService } from '../service/post.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  //Temas
  tema: Theme = new Theme();
  listaTemas: Theme[] = [];
  idTema: number;
  nomeTema: string = '';

  //Postagens
  postagem: Post = new Post();
  listaPostagens: Post[];
  tituloPost: string;

  //Usuário
  user: User = new User();

  //Autenticação
  idUserLogado = environment.idUser;
  nomeUserLogado = environment.username;

  key = 'data';
  reverse = true;
  token = environment.token;

  constructor(
    private router: Router,
    private alertas: AlertasService,
    private postService: PostService,
    private temaService: TemaService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    if (environment.token == '') {
      this.alertas.showAlertInfo('Seu token expirou, faça o login novamente. ');
      this.router.navigate(['/entrar']);
    }
    //Lista todas Postagens
    this.findAllPostagens();
    //Lista todos temas
    this.findAllTemas();
    //Lista todos Usuários
    this.findByIdUser();
  }

  findByTituloPostagem() {
    if (this.tituloPost == '') {
      this.findAllPostagens();
    } else {
      this.postService
        .getByNomePostagem(this.tituloPost)
        .subscribe((resp: Post[]) => {
          this.listaPostagens = resp;
        });
    }
  }

  findByNomeTema() {
    console.log(this.nomeTema);
    if (this.nomeTema == '') {
      this.findAllTemas();
    } else {
      this.temaService
        .getByNomeTema(this.nomeTema)
        .subscribe((resp: Theme[]) => {
          this.listaTemas = resp;
        });
    }
  }

  findAllTemas() {
    this.temaService.getAllTheme().subscribe((resp: Theme[]) => {
      this.listaTemas = resp;
    });
  }

  findByIdTema() {
    this.temaService.getByIdTheme(this.idTema).subscribe((resp: Theme) => {
      this.tema = resp;
    });
  }

  findAllPostagens() {
    this.postService.getAllPostagens().subscribe(
      (resp: Post[]) => {
        this.listaPostagens = resp;
        console.log(resp);
      },
      (err) => {
        console.log(this.listaPostagens);
      }
    );
  }

  findByIdUser() {
    this.authService.getByIdUser(environment.idUser).subscribe((resp: User) => {
      this.user = resp;
    });
  }

 public publicar() {
    this.tema.id = this.idTema;
    this.postagem.theme = this.tema;
    this.user = this.authService.getSessionUser();
    console.log(this.user);
    this.user.id = environment.idUser;
    this.postagem.user = this.user;
    this.postService.postPostagem(this.postagem).subscribe(
      (resp: Post) => {
        this.postagem = resp;
        this.alertas.showAlertSuccess('Postagem realizada com sucesso!');
        this.findAllPostagens();
        this.findByIdUser();
        this.findAllTemas();
        this.postagem = new Post();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

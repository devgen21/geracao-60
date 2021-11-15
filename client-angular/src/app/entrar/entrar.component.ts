import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css'],
})
export class EntrarComponent implements OnInit {
  userLogin: UserLogin = new UserLogin();

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  signIn() {
    this.auth.logar(this.userLogin).subscribe(
      (resp: UserLogin) => {
        this.userLogin = resp;
        environment.token = this.userLogin.token;
        environment.username = this.userLogin.username;
        environment.email = this.userLogin.email;
        environment.id = this.userLogin.id;
        console.log('Usuário logado!');


        this.router.navigate(['/feed'])

      },
      (erro) => {
        if (erro.status == 500) {
          alert('Usuário ou senha incorretos!');
        }
      }
    );
  }
}

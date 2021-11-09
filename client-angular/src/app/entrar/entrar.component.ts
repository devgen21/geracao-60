import { Component, OnInit } from '@angular/core';
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

  constructor(private auth: AuthService) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  signIn() {
    this.auth.entrar(this.userLogin).subscribe(
      (resp: UserLogin) => {
        this.userLogin = resp;
        environment.token = this.userLogin.token;
        environment.username = this.userLogin.username;
        environment.id = this.userLogin.id;

        // this.router.navigate(['/feed'])
      },
      (erro) => {
        if (erro.status == 500) {
          alert('Usuário ou senha incorretos!');
        }
      }
    );
  }
}

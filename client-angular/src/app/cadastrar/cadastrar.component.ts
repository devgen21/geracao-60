import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {
  user: User = new User();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  signUp() {
    this.authService.cadastrar(this.user).subscribe(
      (resp: User) => {
        this.user = resp;
        alert('Usuário cadastrado!');

        this.router.navigate(['/entrar']);
      },
      (erro) => {
        if (erro.status == 500) {
          alert('Dados incorretos!');
        }
      }
    );
  }
}

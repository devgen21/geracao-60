import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {
  user: User = new User();

  constructor(private authService: AuthService) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  signUp() {
    this.authService.cadastrar(this.user).subscribe((resp: User) => {
      this.user = resp;
      alert('Usuário cadastrado!');
    });
  }
}

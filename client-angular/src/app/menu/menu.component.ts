import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  username = environment.username;
  avatar = environment.avatarUser;
  token = environment.token;
  id = environment.idUser;
  constructor(private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  sair() {
    this.router.navigate(['/entrar']);
    environment.token = '';
    environment.username = '';
    environment.avatarUser = '';
    environment.idUser = 0;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Theme } from '../model/Theme';
import { AlertasService } from '../service/alertas.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css'],
})
export class TemaComponent implements OnInit {
  theme: Theme = new Theme();
  listaTemas: Theme[];

  constructor(
    private router: Router,
    private themeService: TemaService,
    private alertas: AlertasService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
    
    if (environment.token == '') {
      this.alertas.showAlertInfo('Sessão expirada! Faça o login novamente!');
      this.load();
      this.router.navigate(['/entrar']);
    }
    
    this.findAllThemes();
  }

  load() {
    //Session storage salva os dados como string
    (sessionStorage.refresh == 'true' || !sessionStorage.refresh) &&
      location.reload();
    sessionStorage.refresh = false;
  }
  //Pega todos temas
  findAllThemes() {
    this.themeService.getAllTheme().subscribe((resp: Theme[]) => {
      this.listaTemas = resp;
    });
  }
  //Cadastra o tema
  cadastrar() {
    this.themeService.postTheme(this.theme).subscribe((resp: Theme) => {
      this.theme = resp;
      alert('Tema cadastrado com sucesso!');
      this.findAllThemes();
      this.theme = new Theme();
    });
  }
}

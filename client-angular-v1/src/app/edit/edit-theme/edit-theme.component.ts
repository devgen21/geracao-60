import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theme } from 'src/app/model/Theme';
import { AlertasService } from 'src/app/service/alertas.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-edit-theme',
  templateUrl: './edit-theme.component.html',
  styleUrls: ['./edit-theme.component.css'],
})
export class EditThemeComponent implements OnInit {
  theme: Theme = new Theme();

  constructor(
    private themeService: TemaService,
    private router: Router,
    private route: ActivatedRoute,
    private alertas: AlertasService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
   
    if (environment.token == '') {
      this.alertas.showAlertInfo('Seu token expirou, faça o login novamente.');
      this.router.navigate(['/entrar']);
    }
   
    let idTema = this.route.snapshot.params['id'];
    this.findAllThemes(idTema);
  }

  atualizar() {
    this.themeService.putTheme(this.theme).subscribe(
      (resp: Theme) => {
        this.theme = resp;
        this.alertas.showAlertSuccess('Tema Atualizado!');
        this.router.navigate(['/tema']);
      },
      (err) => {
        if (err.status == 400) {
          this.alertas.showAlertDanger(
            'Esse tema não pode ser atualizado, pois já pertence a uma postagem'
          );
          this.router.navigate(['/temas']);
        }
      }
    );
  }

  findAllThemes(id: number) {
    this.themeService.getByIdTheme(id).subscribe((resp: Theme) => {
      this.theme = resp;
    });
  }
}

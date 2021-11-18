import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theme } from 'src/app/model/Theme';
import { AlertasService } from 'src/app/service/alertas.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-delete-theme',
  templateUrl: './delete-theme.component.html',
  styleUrls: ['./delete-theme.component.css'],
})
export class DeleteThemeComponent implements OnInit {
  theme: Theme = new Theme();
  idTheme: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private themeService: TemaService,
    private alertas: AlertasService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    if (environment.token == '') {
      this.alertas.showAlertInfo('Seu token expirou, faça o login novamente.');
      this.router.navigate(['/entrar']);
    }

    this.idTheme = this.route.snapshot.params['id'];
    this.findByIdTema(this.idTheme);
  }

  findByIdTema(id: number) {
    this.themeService.getByIdTheme(this.idTheme).subscribe((resp: Theme) => {
      this.theme = resp;
    });
  }

  apagar() {
    this.themeService.deleteTheme(this.idTheme).subscribe(() => {
      this.alertas.showAlertSuccess('Tema apagado!');
      this.router.navigate(['/tema']);
    });
  }
}

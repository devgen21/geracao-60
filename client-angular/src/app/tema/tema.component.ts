import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Theme } from '../model/Theme';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})

export class TemaComponent implements OnInit {
  theme: Theme = new Theme()
  listaTemas: Theme[]


  constructor(
    private router: Router,
    private themeService: TemaService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  
    if(environment.token == ''){
     //alert("Sua sessão expirou, faça o Login novamente!o")  
     this.router.navigate(['/entrar'])
    }
    this.findAllThemes()
  }


  findAllThemes(){
    this.themeService.getAllTheme().subscribe((resp: Theme[]) => {
      this.listaTemas = resp
  })
  }

  cadastrar(){
    this.themeService.postTheme(this.theme).subscribe((resp: Theme)=>{
      this.theme = resp
      alert ('Tema cadastrado com sucesso!')
      this.findAllThemes()
      this.theme = new Theme()
    })
  
  }
}
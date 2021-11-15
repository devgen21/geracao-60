import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { DeleteThemeComponent } from './delete/delete-theme/delete-theme.component';
import { EditThemeComponent } from './edit/edit-theme/edit-theme.component';
import { EntrarComponent } from './entrar/entrar.component';
import { FeedComponent } from './feed/feed.component';
import { Gen60plusComponent } from './gen60plus/gen60plus.component';
import { InicioComponent } from './inicio/inicio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SuporteComponent } from './suporte/suporte.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

  {path: '', component: InicioComponent},

  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent},  
  {path: 'feed', component: FeedComponent},
  {path: 'gen60plus', component: Gen60plusComponent},
  {path: 'suporte', component: SuporteComponent},

  {path: 'tema', component: TemaComponent},
  { path: 'delete-theme/:id', component: DeleteThemeComponent },
  { path: 'edit-theme/:id', component: EditThemeComponent },

  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {HttpClientModule} from '@angular/common/http'
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { FeedComponent } from './feed/feed.component';

import { MenuDefaultComponent } from './menu-default/menu-default.component';
import { AlertasComponent } from './alertas/alertas.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';
import { EditThemeComponent } from './edit/edit-theme/edit-theme.component';
import { DeleteThemeComponent } from './delete/delete-theme/delete-theme.component';
import { RodapeDefaultComponent } from './rodape-default/rodape-default.component';
import { Gen60plusComponent } from './gen60plus/gen60plus.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    InicioComponent,
    TemaComponent,
    FeedComponent,
    Gen60plusComponent,
    MenuDefaultComponent,
    AlertasComponent,
    EditThemeComponent,
    DeleteThemeComponent,
    RodapeDefaultComponent

  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OrderModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

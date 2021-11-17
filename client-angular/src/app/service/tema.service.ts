import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Theme } from './../model/Theme';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token={
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTheme(): Observable<Theme[]>{
    return this.http.get<Theme[]>(`${environment.server}/temas`, this.token)
  }
  
  getByIdTheme(id:number): Observable<Theme>{
    return this.http.get<Theme>(`${environment.server}/temas/${id}`,this.token)
  }
  getByNomeTema(title: string): Observable<Theme[]> {
    return this.http.get<Theme[]>(`${environment.server}/temas/title/${title}`, this.token)
  }
  postTheme(theme: Theme): Observable<Theme>{
     return this.http.post<Theme>(`${environment.server}/temas`,theme, this.token)
  }

  putTheme(theme: Theme): Observable<Theme>{
    return this.http.put<Theme>(`${environment.server}/temas`,theme, this.token)
  }  

  deleteTheme(id: number){
    return this.http.delete(`${environment.server}/temas/${id}`, this.token)
  }
}
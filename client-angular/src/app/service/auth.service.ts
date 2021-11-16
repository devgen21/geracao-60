import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  //O Observable mapeia o retorno do médoto.
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  logar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>(
      `${environment.server}/user/logar`,
      userLogin
    );
  }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>(`${environment.server}/user/cadastrar`, user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.server}/user`, this.token);
  }

  getByIdUser(id: number): Observable<User> {
    return this.http.get<User>(`${environment.server}/user/${id}`, this.token);
  }

  putUser(user: User): Observable<User> {
    return this.http.put<User>(`${environment.server}/user`, user, this.token);
  }

  getSessionUser(): User {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
}

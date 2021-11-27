import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token') || '')
  }

  getAllPostagens(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.server}/feed`, this.token)
  }

  getByIdPostagem(id: number): Observable<Post> {
    return this.http.get<Post>(`${environment.server}/feed/${id}`, this.token)
  }

  getByNomePostagem(title: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.server}/feed/title/${title}`, this.token)
  }

  postPostagem(post: Post): Observable<Post>{
    return this.http.post<Post>(`${environment.server}/feed`, post, this.token)
  }

  putPostagem(post: Post): Observable<Post>{
    return this.http.put<Post>(`${environment.server}/feed`, post, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`${environment.server}/feed/${id}`, this.token)
  }

}

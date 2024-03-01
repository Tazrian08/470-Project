import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  sharePost(post_id: number, user_id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8000/api/post/share/${post_id}/${user_id}`, {});
  }
}

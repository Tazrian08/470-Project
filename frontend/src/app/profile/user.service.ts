import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8000/api'; // Replace with your Laravel API URL

  constructor(private http: HttpClient) { }

  getFollowerCount(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/followers/count/${userId}`);
  }
}

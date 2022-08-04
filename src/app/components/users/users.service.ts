import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl = 'http://localhost:3001/users';
  constructor(private http: HttpClient) {}

  read(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl);
  }

  readById(id: string): Observable<Users> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Users>(url);
  }
}

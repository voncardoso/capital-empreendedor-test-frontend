import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Opportunities } from './opportunities.model';

@Injectable({
  providedIn: 'root',
})
export class OpportunitiesService {
  baseUrl = '  http://localhost:3001/opportunities';
  constructor(private http: HttpClient) {}

  read(): Observable<Opportunities[]> {
    return this.http.get<Opportunities[]>(this.baseUrl);
  }
}

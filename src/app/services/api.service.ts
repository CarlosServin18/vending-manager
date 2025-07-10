import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_BASE_URL = 'https://google-sheet-f-32270709763.europe-west1.run.app/';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(API_BASE_URL + endpoint)}

  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(API_BASE_URL + endpoint, body);
  }
}

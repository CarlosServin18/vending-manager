import { Injectable } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(endpoint: string, params?: Record<string, any>): Observable<T> {
    let httpParams = new HttpParams();
    if (params) {
      for (const k of Object.keys(params)) {
        const v = params[k];
        if (v != null && v !== '') {
          httpParams = httpParams.set(k, v);
        }
      }
    }
    return this.http.get<T>(`${environment.apiUrl}/${endpoint}`, { params: httpParams });
  }

  post<T>(path: string, body: unknown): Observable<T> {
    return this.http.post<T>(`${environment.apiUrl}/${path}`, body);
  }
}

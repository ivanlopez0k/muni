// login.service.ts
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Admin } from '../../models';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiURL = "http://localhost:3000/user/login";
  private http = inject(HttpClient);

  login(usuario: Admin): Observable<any> {
    return this.http.post<any>(`${this.apiURL}`, usuario).pipe(
      tap((res) => {
        localStorage.setItem('token', res.token);
      })
    );
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}

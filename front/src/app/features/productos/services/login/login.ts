import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Admin } from '../../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiURL = "http://localhost:3000/user/login"

  private hhtp = inject(HttpClient)

  login(usuario : Admin): Observable<Admin> {
    console.log(usuario)
    return this.hhtp.post<Admin>(`${this.apiURL}`, usuario)
  }
}

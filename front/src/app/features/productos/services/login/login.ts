import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Admin } from '../../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiURL = "Creo que tengo que usar una environments o algo asi"

  private hhtp = inject(HttpClient)

  login(usuario : Admin): Observable<Admin> {
    return this.hhtp.post<Admin>(`${this.apiURL}`, usuario)
  }
}

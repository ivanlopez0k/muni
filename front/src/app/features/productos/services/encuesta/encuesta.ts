import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EncuestaUsuario } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  private apiUrl = "api en desarrollo..."
  private http = inject(HttpClient)

  GetEncuesta(): Observable<EncuestaUsuario[]>{
    return this.http.get<EncuestaUsuario[]>(this.apiUrl)
  }

  UpdateEncuesta( encuestaUsuario : EncuestaUsuario ) : Observable<EncuestaUsuario>{
    return this.http.post<EncuestaUsuario>(`${this.apiUrl}`, encuestaUsuario )
  }

}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EncuestaUsuario } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  private apiUrl = "http://localhost:3000/survey/create"
  private http = inject(HttpClient)

  GetEncuesta(): Observable<EncuestaUsuario[]>{
    return this.http.get<EncuestaUsuario[]>(this.apiUrl)
  }

  subirEncuesta( encuestaUsuario : EncuestaUsuario ) : Observable<EncuestaUsuario>{
    return this.http.post<EncuestaUsuario>(`${this.apiUrl}`, encuestaUsuario )
  }

}

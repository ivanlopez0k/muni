import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EncuestaUsuario } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  private apiCreate = "http://localhost:3000/survey/create"
  private apiGet = "http://localhost:3000/survey/getall"
  private http = inject(HttpClient)

  GetEncuesta(): Observable<EncuestaUsuario[]>{
    return this.http.get<EncuestaUsuario[]>(this.apiGet)
  }

  subirEncuesta( encuestaUsuario : EncuestaUsuario ) : Observable<EncuestaUsuario>{
    return this.http.post<EncuestaUsuario>(`${this.apiCreate}`, encuestaUsuario )
  }

}

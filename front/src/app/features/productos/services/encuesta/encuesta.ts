import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpZCI6MSwiaWF0IjoxNzU1NDkxMjY0fQ.RX65e8-HSHECI8xstGmyNN9hKzKiv4CdtDXwG1DpAfo"

  private getAuthHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  }

  GetEncuesta(): Observable<EncuestaUsuario[]> {
    return this.http.get<EncuestaUsuario[]>(this.apiGet, {
      headers: this.getAuthHeaders()
    });
  }

  subirEncuesta(encuestaUsuario: EncuestaUsuario): Observable<EncuestaUsuario> {
    return this.http.post<EncuestaUsuario>(this.apiCreate, encuestaUsuario, {
      headers: this.getAuthHeaders()
    });
  }
}

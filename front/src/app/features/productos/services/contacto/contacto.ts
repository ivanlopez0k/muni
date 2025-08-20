import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formulario } from '../../models';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private apiGet = "http://localhost:3000/contact/getall"
  private apiPost = "http://localhost:3000/contact/contacto"
  private http = inject(HttpClient)

  private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpZCI6MSwiaWF0IjoxNzU1NDkxMjY0fQ.RX65e8-HSHECI8xstGmyNN9hKzKiv4CdtDXwG1DpAfo"

  private getAuthHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  }

  obtenerFormulario(): Observable<Formulario[]> {
    return this.http.get<Formulario[]>(`${this.apiGet}`,{
      headers: this.getAuthHeaders()
    });
  }

  enviarFormulario(formulario : Formulario): Observable<Formulario> {
    return this.http.post<Formulario>(`${this.apiPost}`, formulario,{
      headers: this.getAuthHeaders()
    })
  }

}

// (para traer los mensajes de los contactos) GET http://localhost:3000/contact/getall
// (para crear un mensaje) POST http://localhost:3000/contact/contacto

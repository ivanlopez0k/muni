import { HttpClient, } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formulario } from '../../models';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private Url = "http://localhost:3000/contacto"

  private http = inject(HttpClient)

  enviarFormulario(formulario : Formulario): Observable<Formulario> {
    return this.http.post<Formulario>(`${this.Url}`, formulario)
  }

}

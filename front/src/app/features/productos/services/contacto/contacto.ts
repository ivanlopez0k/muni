import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formulario } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private Url = "locahost no se q (preguntar a ivo)"
  private http = inject(HttpClient)

  submitForm(formulario : Formulario): Observable<Formulario> {
    return this.http.post<Formulario>(`${this.Url}`, formulario)
  }

}

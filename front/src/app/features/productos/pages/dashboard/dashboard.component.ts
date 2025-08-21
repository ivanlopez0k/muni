import { Component, ViewChild, AfterViewInit, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule, FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component';
import { EncuestaUsuario, Formulario } from '../../models';
import { EncuestaService } from '../../services/encuesta/encuesta';
import { ContactoService } from '../../services/contacto/contacto';
import { Graficos } from "../../components/graficos/graficos.component";

export interface InformacionFormulario {
  id: number;
  nombre: string;
  fecha: string;
}

export interface InputFiltrador {
  filtrador: FormControl<string>;
}

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    CustomInputComponent,
    Graficos
],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class Dashboard implements OnInit, AfterViewInit {

  encuesta: EncuestaUsuario[] = [];
  contacto: Formulario[] = [];

  private encuestaService = inject(EncuestaService);
  private contactoService = inject(ContactoService)

  encuestaSource = new MatTableDataSource<EncuestaUsuario>();
  formularioSource = new MatTableDataSource<Formulario>();

  fb = inject(NonNullableFormBuilder);

  form: FormGroup<InputFiltrador> = this.fb.group({
    filtrador: this.fb.control('')
  });

  displayedColumnsEncuesta: string[] = ['id','nombre','procedencia', 'fecha'];
  displayedColumnsFormulario: string[] = ['id', 'name', 'email' ,'message', 'createdAt'];

  @ViewChild('paginatorEncuesta') paginatorEncuesta!: MatPaginator;
  @ViewChild('paginatorFormulario') paginatorFormulario!: MatPaginator;


  ngOnInit() {
    this.encuestaService.GetEncuesta().subscribe({
      next: (data) => {
        this.encuesta = data;
        this.encuestaSource.data = data;
      }
    });

    this.contactoService.obtenerFormulario().subscribe({
      next: (data) => {
        this.contacto = data;
        this.formularioSource.data = data;
      }
    })

    this.form.controls.filtrador.valueChanges.subscribe(value => {
    const filterValue = value.toLowerCase().trim();

    this.formularioSource.data = this.contacto.filter(item =>
      item.name.toLowerCase().includes(filterValue)
    );

    this.encuestaSource.data = this.encuesta.filter(item =>
      item.turista.procedencia.toLowerCase().includes(filterValue)
    );
  });
  }

  ngAfterViewInit() {
    this.formularioSource.paginator = this.paginatorFormulario;
    this.encuestaSource.paginator = this.paginatorEncuesta;
  }
}

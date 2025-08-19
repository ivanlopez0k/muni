import { Component, ViewChild, AfterViewInit, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule, FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component';
import { EncuestaUsuario } from '../../models';
import { EncuestaService } from '../../services/encuesta/encuesta';

export interface InformacionFormulario {
  id: number;
  nombre: string;
  fecha: string;
}

export interface InputFiltrador {
  filtrador: FormControl<string>;
}

const ELEMENT_DATA: InformacionFormulario[] = [
  { id: 1, nombre: 'Buenos Aires', fecha: '2025-08-01' },
  { id: 2, nombre: 'Córdoba', fecha: '2025-08-02' },
  { id: 3, nombre: 'Rosario', fecha: '2025-08-03' },
  { id: 4, nombre: 'Mendoza', fecha: '2025-08-04' },
  { id: 5, nombre: 'La Plata', fecha: '2025-08-05' },
  { id: 6, nombre: 'San Juan', fecha: '2025-08-06' },
  { id: 7, nombre: 'Salta', fecha: '2025-08-07' },
  { id: 8, nombre: 'Neuquén', fecha: '2025-08-08' },
  { id: 9, nombre: 'Tucumán', fecha: '2025-08-09' },
  { id: 10, nombre: 'Mar del Plata', fecha: '2025-08-10' },
];

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    CustomInputComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class Dashboard implements OnInit, AfterViewInit {

  encuesta: EncuestaUsuario[] = [];
  encuestaSource = new MatTableDataSource<EncuestaUsuario>();

  fb = inject(NonNullableFormBuilder);

  form: FormGroup<InputFiltrador> = this.fb.group({
    filtrador: this.fb.control('')
  });

  displayedColumnsEncuesta: string[] = ['id', 'procedencia', 'fecha'];
  displayedColumnsFormulario: string[] = ['id', 'nombre', 'fecha'];

  formularioSource = new MatTableDataSource<InformacionFormulario>(ELEMENT_DATA);

  @ViewChild('paginatorEncuesta') paginatorEncuesta!: MatPaginator;
  @ViewChild('paginatorFormulario') paginatorFormulario!: MatPaginator;

  constructor(private encuestaService: EncuestaService) {}

  ngOnInit() {
    this.encuestaService.GetEncuesta().subscribe({
      next: (data) => {
        this.encuesta = data;
        this.encuestaSource.data = data;
        console.log("Encuestas:",data)
      }
    });

    this.form.controls.filtrador.valueChanges.subscribe(value => {
      const filterValue = value.toLowerCase().trim();
      this.formularioSource.data = this.encuesta.filter(item =>
        item.turista.procedencia.toLowerCase().includes(filterValue)
      );
    });
  }

  ngAfterViewInit() {
    this.formularioSource.paginator = this.paginatorFormulario;
    this.encuestaSource.paginator = this.paginatorEncuesta;
  }
}

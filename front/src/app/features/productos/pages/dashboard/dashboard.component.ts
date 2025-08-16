// dashboard.component.ts
import { Component, ViewChild, AfterViewInit, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule, FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component';

export interface InformacionTabla {
  id: number;
  procedencia: string;
  fecha: string;
}

export interface InputFiltrador {
  filtrador: FormControl<string>;
}

const ELEMENT_DATA: InformacionTabla[] = [
  { id: 1, procedencia: 'Buenos Aires', fecha: '2025-08-01' },
  { id: 2, procedencia: 'Córdoba', fecha: '2025-08-02' },
  { id: 3, procedencia: 'Rosario', fecha: '2025-08-03' },
  { id: 4, procedencia: 'Mendoza', fecha: '2025-08-04' },
  { id: 5, procedencia: 'La Plata', fecha: '2025-08-05' },
  { id: 6, procedencia: 'San Juan', fecha: '2025-08-06' },
  { id: 7, procedencia: 'Salta', fecha: '2025-08-07' },
  { id: 8, procedencia: 'Neuquén', fecha: '2025-08-08' },
  { id: 9, procedencia: 'Tucumán', fecha: '2025-08-09' },
  { id: 10, procedencia: 'Mar del Plata', fecha: '2025-08-10' },
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

  fb = inject(NonNullableFormBuilder);

  form: FormGroup<InputFiltrador> = this.fb.group({
    filtrador: this.fb.control('')
  });

  displayedColumns: string[] = ['id', 'procedencia', 'fecha'];
  dataSource = new MatTableDataSource<InformacionTabla>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.form.controls.filtrador.valueChanges.subscribe(value => {
      const filterValue = value.toLowerCase().trim();
      this.dataSource.data = ELEMENT_DATA.filter(item =>
        item.procedencia.toLowerCase().includes(filterValue)
      );
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

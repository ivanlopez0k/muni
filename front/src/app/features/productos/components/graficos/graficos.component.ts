import { Component, inject, OnInit } from '@angular/core';
import { EncuestaService } from '../../services/encuesta/encuesta';
import { EncuestaUsuario } from '../../models';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { GraficoMixedChart } from "../grafico-mixed-chart/grafico-mixed-chart.component";
import e from 'express';

export interface select{
  selectedChartName: FormControl<string>;
}

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.scss'],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    GraficoMixedChart
]
})
export class Graficos implements OnInit {
  encuesta: EncuestaUsuario[] = [];

  cantidadHombres: number = 0;
  cantidadMujeres: number = 0

  edad18_25: number = 0;
  edad26_35: number = 0;
  edad36_45: number = 0
  edad46_55: number = 0;
  edad56_mas: number = 0;

  cantidadCiudad: number = 0;
  cantidadLocalidad: number = 0;
  cantidadProvincia: number = 0
  cantidadPais: number = 0;

  cantidadEnero: number = 0;
  cantidadFebrero: number = 0
  cantidadMarzo: number = 0;
  cantidadAbril: number = 0;
  cantidadMayo: number = 0
  cantidadJunio: number = 0;
  cantidadJulio: number = 0
  cantidadAgosto: number = 0;
  cantidadSeptiembre: number = 0
  cantidadOctubre: number = 0;
  cantidadNoviembre: number = 0
  cantidadDiciembre: number = 0;

  cantidadTelevision: number = 0;
  cantidadPaginaWeb: number = 0;
  cantidadRadio: number = 0;
  cantidadGraficos: number = 0;
  cantidadFacebook: number = 0;
  cantidadRecomendacion: number = 0;
  cantidadOtros: number = 0;

  cantidadConocia: number = 0;
  cantidadPublicidad: number = 0
  cantidadTranquilidad: number = 0;
  cantidadPaisajes: number = 0
  cantidadEventos: number = 0;
  cantidadAmabilidad: number = 0
  cantidadOtrosMotivos: number = 0;

  cantidadConReserva: number = 0;
  cantidadSinReserva: number = 0;

  cantidadHoteles: number = 0;
  cantidadCabanas: number = 0;
  cantidadHosterias: number = 0;
  cantidadCamping: number = 0
  cantidadCasaAlquiler: number = 0;
  cantidadOtroHospedaje: number = 0;

  cantidadServicioExcelente: number = 0;
  cantidadServicioMuyBuena: number = 0;
  cantidadServicioBuena: number = 0;
  cantidadServicioRegular: number = 0;
  cantidadServicioMala: number = 0;
  cantidadServicioMuyMala: number = 0;
  cantidadServicioPesima: number = 0;

  cantidadSinInformacion: number = 0;
  cantidadOficinaRotonda: number = 0;
  cantidadOficinaPlazaMerlo: number = 0
  cantidadOficinaTerminal: number = 0;

  cantidadInformacionHospedaje: number = 0;
  cantidadInformacionPaseos: number = 0;
  cantidadInformacionEventos: number = 0;
  cantidadInformacionGastronomia: number = 0;
  cantidadInformacionTurismoAventura: number = 0
  cantidadInformacionServicios: number = 0;
  cantidadInformacionRutas: number = 0;
  cantidadInformacionOtros: number = 0;

  cantidadInformacionExcelente: number = 0;
  cantidadInformacionMuyBuena: number = 0;
  cantidadInformacionBuena: number = 0
  cantidadInformacionRegular: number = 0;
  cantidadInformacionMala: number = 0;
  cantidadInformacionMuyMala: number = 0;
  cantidadInformacionPesima: number = 0;

  cantidadDestinoCompletoSi: number = 0;
  cantidadDestinoCompletoNo: number = 0;

  cantidadDestinoTuristicoSi: number = 0;
  cantidadDestinoTuristicoNo: number = 0;

  fb = inject(NonNullableFormBuilder);

  form: FormGroup<select> = this.fb.group({
    selectedChartName: this.fb.control('-')
  })

  chartNames = ['Turista', 'Medios', 'Motivo', 'Hospedaje', 'Oficina', 'Recomendaria'];

  private encuestaService = inject(EncuestaService);



  ngOnInit() {
    this.encuestaService.GetEncuesta().subscribe({
    next: (data) => {
    this.encuesta = data;
    console.log(this.encuesta)

    this.encuesta.map(encuesta => {
      if (encuesta.turista.sexo === 'masculino') {
        this.cantidadHombres++;
      } else if (encuesta.turista.sexo === 'femenino') {
        this.cantidadMujeres++;
      }
    });

    this.encuesta.map(encuesta => {
      if (encuesta.turista.edad >= 18 && encuesta.turista.edad <= 25) {
        this.edad18_25++;
      }else if (encuesta.turista.edad >= 26 && encuesta.turista.edad <= 35) {
        this.edad26_35++;
      } else if (encuesta.turista.edad >= 36 && encuesta.turista.edad <= 45) {
        this.edad36_45++;
      } else if (encuesta.turista.edad >= 46 && encuesta.turista.edad <= 55) {
        this.edad46_55++;
      } else if (encuesta.turista.edad >= 56) {
        this.edad56_mas++;
      }

  });

    this.encuesta.map(encuesta => {
      if (encuesta.turista.procedencia === 'Ciudad de cordoba') {
        this.cantidadCiudad++;
      } else if (encuesta.turista.procedencia === 'Otra localidad de Cordoba') {
        this.cantidadLocalidad++;
      } else if (encuesta.turista.procedencia === 'Otra provincia') {
        this.cantidadProvincia++;
      } else if (encuesta.turista.procedencia === 'Otro Pais') {
        this.cantidadPais++;
      }
    });

    this.encuesta.map(encuesta =>{
      const fecha = new Date(encuesta.turista.ingreso);
      const mes = fecha.getMonth() + 1;
      switch(mes){
        case 1:
          this.cantidadEnero++;
          break;
        case 2:
          this.cantidadFebrero++;
          break;
        case 3:
          this.cantidadMarzo++;
          break;
        case 4:
          this.cantidadAbril++;
          break;
        case 5:
          this.cantidadMayo++;
          break;
        case 6:
          this.cantidadJunio++;
          break;
        case 7:
          this.cantidadJulio++;
          break;
        case 8:
          this.cantidadAgosto++;
          break;
        case 9:
          this.cantidadSeptiembre++;
          break;
        case 10:
          this.cantidadOctubre++;
          break;
        case 11:
          this.cantidadNoviembre++;
          break;
        case 12:
          this.cantidadDiciembre++;
          break;
      }
    });

    this.encuesta.map(encuesta => {
      if (encuesta.difusion.television === true) {
        this.cantidadTelevision++;
      }else if (encuesta.difusion.pagina === true) {
        this.cantidadPaginaWeb++;
      } else if (encuesta.difusion.radio === true) {
        this.cantidadRadio++;
      } else if (encuesta.difusion.graficos === true) {
        this.cantidadGraficos++;
      } else if (encuesta.difusion.facebook === true) {
        this.cantidadFacebook++;
      } else if (encuesta.difusion.recomendacion === true) {
        this.cantidadRecomendacion++;
      } else if (encuesta.difusion.otros.length > 0) {
        this.cantidadOtros++;
      }
    });

    this.encuesta.map(encuesta => {
      if (encuesta.motivo.conocia === true) {
        this.cantidadConocia++;
      } else if (encuesta.motivo.promocion === true) {
        this.cantidadPublicidad++;
      } else if (encuesta.motivo.tranquilidad === true) {
        this.cantidadTranquilidad++;
      } else if (encuesta.motivo.paisajes === true) {
        this.cantidadPaisajes++;
      } else if (encuesta.motivo.eventos === true) {
        this.cantidadEventos++;
      } else if (encuesta.motivo.amabilidad === true) {
        this.cantidadAmabilidad++;
      } else if (encuesta.motivo.otros.length > 0) {
        this.cantidadOtrosMotivos++;
      }
    });

    this.encuesta.map(encuesta =>{
      if(encuesta.reserva.reserva === 'Sin reserva'){
        this.cantidadSinReserva++;
      }else if(encuesta.reserva.reserva === 'Con reserva'){
        this.cantidadConReserva++;
      }
    });

    this.encuesta.map(encuesta => {
      if (encuesta.tipo_hospedaje.tipo_hospedaje === 'Hotel') {
        this.cantidadHoteles++;
      } else if (encuesta.tipo_hospedaje.tipo_hospedaje === 'Cabaña') {
        this.cantidadCabanas++;
      } else if (encuesta.tipo_hospedaje.tipo_hospedaje === 'Hosteria') {
        this.cantidadHosterias++;
      } else if (encuesta.tipo_hospedaje.tipo_hospedaje === 'Camping') {
        this.cantidadCamping++;
      } else if (encuesta.tipo_hospedaje.tipo_hospedaje === 'Casa de alquiler') {
        this.cantidadCasaAlquiler++;
      } else if (encuesta.tipo_hospedaje.tipo_hospedaje === 'Otro') {
        this.cantidadOtroHospedaje++;
      }
    });

    this.encuesta.map(encuesta => {
      if (encuesta.cali_hospedaje.calificacion_hospedaje === 'Excelente') {
        this.cantidadServicioExcelente++;
      } else if (encuesta.cali_hospedaje.calificacion_hospedaje === 'Muy buena') {
        this.cantidadServicioMuyBuena++;
      } else if (encuesta.cali_hospedaje.calificacion_hospedaje === 'Buena') {
        this.cantidadServicioBuena++;
      } else if (encuesta.cali_hospedaje.calificacion_hospedaje === 'Regular') {
        this.cantidadServicioRegular++;
      } else if (encuesta.cali_hospedaje.calificacion_hospedaje === 'Mala') {
        this.cantidadServicioMala++;
      } else if (encuesta.cali_hospedaje.calificacion_hospedaje === 'Muy mala') {
        this.cantidadServicioMuyMala++;
      } else if (encuesta.cali_hospedaje.calificacion_hospedaje === 'Pésima') {
        this.cantidadServicioPesima++;
      }
    });

    this.encuesta.map(encuesta => {
      if (encuesta.oficina.oficinaOption === 'No') {
        this.cantidadSinInformacion++;
      } else if (encuesta.oficina.oficinaOption === 'Oficina de la Rotonda de Ingreso') {
        this.cantidadOficinaRotonda++;
      } else if (encuesta.oficina.oficinaOption === 'Oficina de Plazoleta Merlo') {
        this.cantidadOficinaPlazaMerlo++;
      } else if (encuesta.oficina.oficinaOption === 'Oficina de la Terminal') {
        this.cantidadOficinaTerminal++;
      }
    });

    this.encuesta.map(encuesta => {
      if(encuesta.tipo_informacion.hospedaje === true){
        this.cantidadInformacionHospedaje++;
      } else if(encuesta.tipo_informacion.paseos === true){
        this.cantidadInformacionPaseos++;
      } else if(encuesta.tipo_informacion.eventos === true){
        this.cantidadInformacionEventos++;
      } else if(encuesta.tipo_informacion.gastronomia === true){
        this.cantidadInformacionGastronomia++;
      } else if(encuesta.tipo_informacion.turismo_aventura === true){
        this.cantidadInformacionTurismoAventura++;
      } else if(encuesta.tipo_informacion.servicios === true){
        this.cantidadInformacionServicios++;
      } else if(encuesta.tipo_informacion.rutas === true){
        this.cantidadInformacionRutas++;
      } else if(encuesta.tipo_informacion.otros.length > 0){
        this.cantidadInformacionOtros++;
      }
    })

    this.encuesta.map(encuesta => {
      if (encuesta.cali_informacion.calificacion === 'Excelente') {
        this.cantidadInformacionExcelente++;
      } else if (encuesta.cali_informacion.calificacion === 'Muy Buena') {
        this.cantidadInformacionMuyBuena++;
      } else if (encuesta.cali_informacion.calificacion === 'Buena') {
        this.cantidadInformacionBuena++;
      } else if (encuesta.cali_informacion.calificacion === 'Regular') {
        this.cantidadInformacionRegular++;
      } else if (encuesta.cali_informacion.calificacion === 'Mala') {
        this.cantidadInformacionMala++;
      } else if (encuesta.cali_informacion.calificacion === 'Muy mala') {
        this.cantidadInformacionMuyMala++;
      } else if (encuesta.cali_informacion.calificacion === 'Pesima') {
        this.cantidadInformacionPesima++;
      }
    });

    this.encuesta.map(encuesta => {
      if (encuesta.cali_mc.calificacion_MC === 'Si') {
        this.cantidadDestinoCompletoSi++;
      } else if (encuesta.cali_mc.calificacion_MC === 'No') {
        this.cantidadDestinoCompletoNo++;
      }
    });

    this.encuesta.map(encuesta => {
      if(encuesta.recom.recomendaria === 'Si'){
        this.cantidadDestinoTuristicoSi++;
      } else if(encuesta.recom.recomendaria === 'No'){
        this.cantidadDestinoTuristicoNo++;
      }
    })

  },
});




  }

}

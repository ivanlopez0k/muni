import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Form, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EncuestaService } from '../../services/encuesta/encuesta';
import { EncuestaUsuario } from '../../models';

import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation, MatStepperModule } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe, CommonModule } from '@angular/common';

import { MatRadioModule } from '@angular/material/radio' ;
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component';
import { EncuestaInpu } from '../../components/encuesta-inpu/encuesta-inpu';

export interface Turista{
  nombre: FormControl<string>,
  edad: FormControl<number>,
  sexo: FormControl<string>,
  procedencia: FormControl<string>,
  otraProvincia: FormControl<string>,
  otraLocalidad: FormControl<string>,
  otroPais: FormControl<string>,
  acompaniantes: FormControl<string>,
  otrosAcompaniantes: FormControl<string>,
  ingreso: FormControl<Date>,
  salida: FormControl<Date>
}

export interface Difusion{
  television: FormControl<boolean>
  pagina: FormControl<boolean>,
  radio: FormControl<boolean>,
  graficos: FormControl<boolean>,
  facebook: FormControl<boolean>,
  recomendacion: FormControl<boolean>,
  otros: FormControl<string>
}

export interface Motivo{
  conocia: FormControl<boolean>,
  recomendacion: FormControl<boolean>,
  promocion: FormControl<boolean>,
  tranquilidad: FormControl<boolean>,
  paisajes: FormControl<boolean>,
  eventos: FormControl<boolean>,
  amabilidad: FormControl<boolean>,
  otros:FormControl<string>
}

export interface Hospedaje {
  Reserva: FormGroup<{
    reserva: FormControl<string>;
    medioReserva: FormControl<string>;
  }>;
  Tipo_Hospedaje: FormGroup<{
    tipo_hospedaje: FormControl<string>;
    otro_hospedaje: FormControl<string>;
  }>;
  Calificacion_Hospedaje: FormGroup<{
    calificacion_hospedaje: FormControl<string>;
  }>;
  Material_Informativo: FormGroup<{
    recibioMaterial: FormControl<string>;
    siRecibio: FormControl<string>;
  }>;
}

export interface Oficina{
  Oficina: FormGroup<{
        oficinaOption: FormControl<string>
    }>,
    Tipo_Informacion: FormGroup<{
        hospedaje: FormControl<boolean>,
        paseos: FormControl<boolean>,
        eventos: FormControl<boolean>,
        gastronomia: FormControl<boolean>,
        turismo_aventura: FormControl<boolean>,
        servicios: FormControl<boolean>,
        rutas: FormControl<boolean>,
        otros: FormControl<string>
    }>,
    Medio_Informacion: FormGroup<{
        personalmente: FormControl<string>,
        email: FormControl<string>,
        facebook: FormControl<string>,
        telefonica: FormControl<string>,
        otros: FormControl<string>
    }>,
    Tipo_Material: FormGroup<{
        folletos: FormControl<string>,
        revistas: FormControl<string>,
        planos: FormControl<string>,
        calcomanias: FormControl<string>,
        guias: FormControl<string>
    }>,
    Calificacion_Informacion: FormGroup<{
        calificacion: FormControl<string>
    }>,
    Otra_Informacion: FormGroup<{
        informacion: FormControl<string>,
        otraInformacion: FormControl<string>
    }>,
    Que_Informacion: FormGroup<{
        espectaculos_MC: FormControl<boolean>,
        espectaculos_cercanos: FormControl<boolean>,
        recreacion: FormControl<boolean>,
        deportivas: FormControl<boolean>,
        aventuras: FormControl<boolean>,
        paseos: FormControl<boolean>,
        otros: FormControl<string>
    }>,
}

export interface Calificacion{
  Calificacion_MC: FormGroup<{
        calificacion_MC: FormControl<string>,
        porque: FormControl<string>
    }>,
    Recomendaria: FormGroup<{
        recomendaria: FormControl<string>,
        porque: FormControl<string>
    }>,
}

@Component({
  selector: 'app-encuesta',
  imports: [
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AsyncPipe,
    MatRadioModule,
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCheckboxModule,
    EncuestaInpu
  ],
  providers:[provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './encuesta.component.html',
  styleUrl: './encuesta.component.scss',
  standalone:true
})

export class Encuesta {
  private fb = inject(NonNullableFormBuilder);
  private encuestaService = inject(EncuestaService)

  stepperOrientation: Observable<StepperOrientation>;

  constructor() {
    const breakpointObserver = inject(BreakpointObserver);
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  formularioTurista: FormGroup<Turista> = this.fb.group({
    nombre:this.fb.control('') ,
    edad:this.fb.control(18, Validators.required),
    sexo:this.fb.control('', Validators.required),

    procedencia:this.fb.control('', Validators.required),
    otraProvincia:this.fb.control('', Validators.required),
    otraLocalidad:this.fb.control('', Validators.required) ,
    otroPais:this.fb.control('', Validators.required),

    acompaniantes:this.fb.control('', Validators.required),
    otrosAcompaniantes: this.fb.control('', Validators.required),

    ingreso: this.fb.control(new Date(), Validators.required),
    salida: this.fb.control(new Date(), Validators.required)
  })

  formularioDifusion: FormGroup<Difusion> = this.fb.group({
    television: this.fb.control(false),
    pagina: this.fb.control(false),
    radio: this.fb.control(false),
    graficos: this.fb.control(false),
    facebook: this.fb.control(false),
    recomendacion: this.fb.control(false),
    otros: this.fb.control('')
  });

  formularioMotivo: FormGroup<Motivo> = this.fb.group({
    conocia: this.fb.control(false),
    recomendacion: this.fb.control(false),
    promocion: this.fb.control(false),
    tranquilidad: this.fb.control(false),
    paisajes: this.fb.control(false),
    eventos: this.fb.control(false),
    amabilidad: this.fb.control(false),
    otros: this.fb.control('')
  });

  formularioHospedaje: FormGroup<Hospedaje> = this.fb.group({
    Reserva: this.fb.group({
      reserva: this.fb.control('', Validators.required),
      medioReserva: this.fb.control('')
    }),
    Tipo_Hospedaje: this.fb.group({
      tipo_hospedaje: this.fb.control('', Validators.required),
      otro_hospedaje: this.fb.control('', Validators.required)
    }),
    Calificacion_Hospedaje: this.fb.group({
      calificacion_hospedaje: this.fb.control('', Validators.required),
    }),
    Material_Informativo: this.fb.group({
      recibioMaterial: this.fb.control('', Validators.required),
      siRecibio: this.fb.control('', Validators.required)
    })
  });

  formularioOficina: FormGroup<Oficina> = this.fb.group({
    Oficina: this.fb.group({
      oficinaOption: this.fb.control('', Validators.required)
    }),
    Tipo_Informacion: this.fb.group({
      hospedaje: this.fb.control(false),
      paseos: this.fb.control(false),
      eventos: this.fb.control(false),
      gastronomia: this.fb.control(false),
      turismo_aventura: this.fb.control(false),
      servicios: this.fb.control(false),
      rutas: this.fb.control(false),
      otros: this.fb.control('')
    }),
    Medio_Informacion: this.fb.group({
      personalmente: this.fb.control(''),
      email: this.fb.control(''),
      facebook: this.fb.control(''),
      telefonica: this.fb.control(''),
      otros: this.fb.control('')
    }),
    Tipo_Material: this.fb.group({
      folletos: this.fb.control(''),
      revistas: this.fb.control(''),
      planos: this.fb.control(''),
      calcomanias: this.fb.control(''),
      guias: this.fb.control('')
    }),
    Calificacion_Informacion: this.fb.group({
      calificacion: this.fb.control('')
    }),
    Otra_Informacion: this.fb.group({
      informacion: this.fb.control(''),
      otraInformacion: this.fb.control('')
    }),
    Que_Informacion: this.fb.group({
      espectaculos_MC: this.fb.control(false),
      espectaculos_cercanos: this.fb.control(false),
      recreacion: this.fb.control(false),
      deportivas: this.fb.control(false),
      aventuras: this.fb.control(false),
      paseos: this.fb.control(false),
      otros: this.fb.control('')
    })
  });

  formularioCalificacion: FormGroup<Calificacion> = this.fb.group({
    Calificacion_MC: this.fb.group({
      calificacion_MC: this.fb.control(''),
      porque: this.fb.control('', Validators.required)
    }),
    Recomendaria: this.fb.group({
      recomendaria: this.fb.control(''),
      porque: this.fb.control('', Validators.required)
    })
  });

  enviarEncuest() {
  const encuestaUsuario: EncuestaUsuario = {
    id: Date.now(),

    turista: this.formularioTurista.value as EncuestaUsuario['turista'],
    difusion: this.formularioDifusion.value as EncuestaUsuario['difusion'],
    motivo: this.formularioMotivo.value as EncuestaUsuario['motivo'],

    reserva: this.formularioHospedaje.value.Reserva as EncuestaUsuario['reserva'],
    tipo_hospedaje: this.formularioHospedaje.value.Tipo_Hospedaje as EncuestaUsuario['tipo_hospedaje'],
    cali_hospedaje: this.formularioHospedaje.value.Calificacion_Hospedaje as EncuestaUsuario['cali_hospedaje'],
    mat_informativo: this.formularioHospedaje.value.Material_Informativo as EncuestaUsuario['mat_informativo'],

    oficina: this.formularioOficina.value.Oficina as EncuestaUsuario['oficina'],
    tipo_informacion: this.formularioOficina.value.Tipo_Informacion as EncuestaUsuario['tipo_informacion'],
    medio_informacion: this.formularioOficina.value.Medio_Informacion as EncuestaUsuario['medio_informacion'],
    tipo_material: this.formularioOficina.value.Tipo_Material as EncuestaUsuario['tipo_material'],
    cali_informacion: this.formularioOficina.value.Calificacion_Informacion as EncuestaUsuario['cali_informacion'],
    otra_info: this.formularioOficina.value.Otra_Informacion as EncuestaUsuario['otra_info'],
    que_info: this.formularioOficina.value.Que_Informacion as EncuestaUsuario['que_info'],

    cali_mc: this.formularioCalificacion.value.Calificacion_MC as EncuestaUsuario['cali_mc'],
    recom: this.formularioCalificacion.value.Recomendaria as EncuestaUsuario['recom'],

    createdAt: new Date(),
  };

  this.encuestaService.subirEncuesta(encuestaUsuario).subscribe({
    next: () => console.log('Encuesta enviada con éxito'),
    error: (e) => console.error('Error al enviar la encuesta:', e),
  });
  }

}

import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactoService } from '../../services/contacto/contacto';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component';

export interface ContenidoFormulario {
  name: FormControl<string>;
  email: FormControl<string>;
  message: FormControl<string>;
}

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule, CustomInputComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss',
})
export class Contacto {
  private fb = inject(NonNullableFormBuilder);
  contactoService = inject(ContactoService);

  form: FormGroup<ContenidoFormulario> = this.fb.group({
    name: this.fb.control('', Validators.required),
    email: this.fb.control('', [Validators.required, Validators.email]),
    message: this.fb.control('', Validators.required),
  });

  enviarFormulario() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const datosFormulario = this.form.getRawValue();

    this.contactoService.enviarFormulario(datosFormulario).subscribe({
      next: () => {
        console.log('Formulario enviado con éxito')
        this.form.reset();
      },
      error: (e) => console.error('Error al enviar:', e),
    });
  }
}

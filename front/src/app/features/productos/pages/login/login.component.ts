import { Component, inject } from '@angular/core';
import { FormGroup, FormControl,NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component';
import { Router } from '@angular/router';
import { Admin } from '../../models';

export interface FormLogin {
  username: FormControl<string>;
  password:FormControl<string> ;
}

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CustomInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class Login {
  private fb = inject(NonNullableFormBuilder)
  private LoginService = inject(LoginService)
  private router = inject(Router)

  form: FormGroup<FormLogin> = this.fb.group({
    username: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required),
  })

  login(){
    if(this.form.invalid) return;

    const datosUsuario : Admin = this.form.getRawValue();
    this.LoginService.login(datosUsuario).subscribe({
      next: (res) => {
        localStorage.setItem('token',JSON.stringify(res));
        this.router.navigate(['/dashboard'])
      },
      error: (err) => {
        console.error('Error desde el backend:', err);

        if (err.status === 401 || err.status === 400) {
          alert('Usuario o contraseña inválidos');
        } else {
          alert('Error del servidor. Intentalo más tarde');
        }
      }
    })
    }

}







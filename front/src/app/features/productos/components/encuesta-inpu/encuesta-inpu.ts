import { Component, input, forwardRef, effect } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-encuesta-inpu',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './encuesta-inpu.html',
  styleUrls: ['./encuesta-inpu.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EncuestaInpu),
      multi: true,
    },
  ],
})
export class EncuestaInpu {
  control = input.required<FormControl<any>>();
  type = input<'text' | 'number'>('text');
  label = input<string>('');
  placeholder = input<string>('');

  onTouched = () => {};
  onChange = (_value: any) => {};

  constructor() {
    effect(() => {
      this.onChange(this.control().value);
    });
  }

  writeValue(value: any): void {
    if (value !== this.control().value) {
      this.control().setValue(value, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.control().disable() : this.control().enable();
  }
}

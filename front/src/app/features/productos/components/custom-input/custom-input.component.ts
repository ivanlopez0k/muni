import { Component, input, forwardRef, effect } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent {
  control = input.required<FormControl<any>>();
  type = input<'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'textarea'>('text');
  label = input<string>('');
  placeholder = input<string>('');

  onTouched = () => {};
  onChange = (_value: any) => {};

  constructor() {
    effect(() => {
      const value = this.control().value;
      this.onChange(value);
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

import { Component, InputSignal, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BPDyanmicFormField } from '../../Models/bpdyanmic-form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-bp-dyanmic-form-field',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule

  ],
  templateUrl: './bp-dyanmic-form-field.component.html',
  styleUrl: './bp-dyanmic-form-field.component.scss'
})
export class BpDyanmicFormFieldComponent {
  bpFormControl: InputSignal<BPDyanmicFormField<string>> = input.required();
  form: InputSignal<FormGroup> = input.required();
  get isValid() {
    const key = this.bpFormControl().key;
    const control = this.form().controls[key];
    return !control.touched  ? true : control.valid;
  }
}

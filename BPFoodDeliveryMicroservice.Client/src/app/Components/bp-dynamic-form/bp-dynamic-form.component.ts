import { Component, InputSignal, input, output } from '@angular/core';
import { BPDyanmicFormField } from '../../Models/bpdyanmic-form-field';
import { BpDynamicFormService } from '../../Services/bp-dynamic-form.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BpDyanmicFormFieldComponent } from '../bp-dyanmic-form-field/bp-dyanmic-form-field.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-bp-dynamic-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BpDyanmicFormFieldComponent,
    MatButtonModule,

  ],
  templateUrl: './bp-dynamic-form.component.html',
  styleUrl: './bp-dynamic-form.component.scss'
})
export class BpDynamicFormComponent {
  formControlList: InputSignal<BPDyanmicFormField<string>[]> = input.required();
  afterSubmit = output<{ Code: string; MinAmount: number; Discount: number; }>();
  afterCancel = output<void>();
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: BpDynamicFormService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.formControlList());
  }

  onSubmit() {
    this.afterSubmit.emit(this.form.getRawValue())
  }
  cancel(): void {
    this.afterCancel.emit();
  }
}

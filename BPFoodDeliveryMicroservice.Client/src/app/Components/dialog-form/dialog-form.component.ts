import { Component, inject } from '@angular/core';
import { BpDynamicFormService } from '../../Services/bp-dynamic-form.service';
import { BpDynamicFormComponent } from '../bp-dynamic-form/bp-dynamic-form.component';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { BPDyanmicFormField } from '../../Models/bpdyanmic-form-field';

@Component({
  selector: 'app-dialog-form',
  standalone: true,
  imports: [
    BpDynamicFormComponent,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,

  ],
  templateUrl: './dialog-form.component.html',
  styleUrl: './dialog-form.component.scss'
})
export class DialogFormComponent {

  dialogRef = inject(MatDialogRef<DialogFormComponent>);
  formFields:BPDyanmicFormField<string>[] = inject(MAT_DIALOG_DATA);

  _dynamic = inject(BpDynamicFormService)


onNoClick() {
  this.dialogRef.close(false);
}
onSubmit(formValue: any) {
 this.dialogRef.close(formValue);
}
}

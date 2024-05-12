import { Injectable } from '@angular/core';
import { BPDyanmicFormField } from '../Models/bpdyanmic-form-field';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BpDynamicFormService {

  constructor() { }


  toFormGroup<T = string>(questions: BPDyanmicFormField<T>[] ) {
    const group: Record<string,FormControl> = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}

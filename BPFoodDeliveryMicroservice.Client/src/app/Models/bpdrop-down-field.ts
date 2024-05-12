import { BPDyanmicFormField } from "./bpdyanmic-form-field";

export class BPDropdownField extends BPDyanmicFormField<string>  {
   override controlType: "textbox" | "dropdown" =  "dropdown"; 
}
 
  

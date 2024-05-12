import { BPDyanmicFormField } from "./bpdyanmic-form-field";

export class BPTextboxField<T> extends BPDyanmicFormField<T>  {
   override controlType: "textbox" | "dropdown" =  "textbox"; 
}
 
  

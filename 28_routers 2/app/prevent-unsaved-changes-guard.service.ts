
import { CanDeactivate } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { FormGroup } from '@angular/forms';

export interface FormComponent {
   //form: FormGroup;
   hasUnsavedChanges() : Boolean;
}
export class PreventUnsavedChangesGuard implements CanDeactivate<FormComponent> {

   canDeactivate(component: FormComponent) {
      if (component.hasUnsavedChanges())
         return confirm("are you sure?");

      return true;
   }

}
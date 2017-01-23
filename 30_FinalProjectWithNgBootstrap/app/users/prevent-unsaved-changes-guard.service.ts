import { CanDeactivate } from '@angular/router';
import { UsersFormComponent } from './users-form.component';
import { FormComponent } from '../shared/form-component.interface';

export class PreventUnsavedChangesGuard implements CanDeactivate<FormComponent>{
    canDeactivate(component:FormComponent) {
         if(component.form.dirty)
            return confirm("Are you sure?");

          return true;
    }
}
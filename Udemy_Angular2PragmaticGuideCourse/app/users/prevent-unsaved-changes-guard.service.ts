import { CanDeactivate } from '@angular/router';
import { UsersFormComponent } from './users-form.component';
import { FormComponent } from './form-component.interface';


export class PreventUnsavedChangesGuard implements CanDeactivate<UsersFormComponent>{
    canDeactivate(component:UsersFormComponent) {
         if(component.hasUnsavedChanges)
            return confirm("Are you sure?");
          return true;
    }
}
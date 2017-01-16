import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form.component';
import { ColonelComponent } from './colonel.component';
@Component({
  selector: 'my-app',
  template: `


      <h2>15. Form by Template method</h2>
      <contact-form></contact-form>

      <h2>16. King's Quest</h2>
      <colonel></colonel>
    `
})
export class AppComponent {
  
}

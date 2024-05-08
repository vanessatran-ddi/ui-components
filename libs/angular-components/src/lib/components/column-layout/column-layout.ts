import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-column-layout",
  template: `<goa-column-layout>
    <ng-content /> 
  </goa-column-layout>`,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAColumnLayout { /** no props **/ }

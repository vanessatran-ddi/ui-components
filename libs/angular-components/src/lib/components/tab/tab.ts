import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-tab",
  template: `
    <goa-tab
      [heading]="heading"
    >
      <ng-content select="[slot=heading]" />
      <ng-content /> 
    </goa-tab>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoATab {
  @Input() heading?: string;
}

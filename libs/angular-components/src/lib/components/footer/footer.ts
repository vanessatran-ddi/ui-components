import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-app-footer",
  template: `
    <goa-app-footer
      [maxcontentwidth]="maxContentWidth"
    >
      <ng-content select="[slot=nav]" />
      <ng-content select="[slot=meta]" />
    </goa-app-footer>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAAppFooter {
  @Input() maxContentWidth?: string;
}

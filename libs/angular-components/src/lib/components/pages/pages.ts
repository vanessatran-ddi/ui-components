import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-pages",
  template: `
    <goa-pages
      [current]="current"
    >
      <ng-content />
    </goa-pages>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAPages {
  @Input() current?: number;
}

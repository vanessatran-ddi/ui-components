import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-app-footer-nav-section",
  template: `
    <goa-app-footer-nav-section
      [maxcolumncount]="maxColumnCount"
      [heading]="heading"
    >
      <ng-content />
    </goa-app-footer-nav-section>
  `,
  styles: [":host { width: 100%; }"],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAAppFooterNavSection {
  @Input() heading?: string;
  @Input() maxColumnCount?: string;
}

import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-app-footer-meta-section",
  template: `
    <goa-app-footer-meta-section>
      <ng-content />
    </goa-app-footer-meta-section>
  `,
  styles: [":host { width: 100%; }"],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAAppFooterMetaSection {
  // nothing
}
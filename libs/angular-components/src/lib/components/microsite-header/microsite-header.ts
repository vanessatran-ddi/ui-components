import { GoALinkTarget, GoAServiceLevel } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-microsite-header",
  template: `
    <goa-microsite-header
      [type]="type"
      [version]="version"
      [feedbackurl]="feedbackUrl"
      [maxcontentwidth]="maxContentWidth"
      [feedbackurltarget]="feedbackUrlTarget"
      [headerurltarget]="headerUrlTarget"
    >
    </goa-microsite-header>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAMicrositeHeader {
  @Input() type?: GoAServiceLevel;
  @Input() version?: string;
  @Input() feedbackUrl?: string;
  @Input() maxContentWidth?: string;
  @Input() feedbackUrlTarget?: GoALinkTarget;
  @Input() headerUrlTarget?: GoALinkTarget;
}
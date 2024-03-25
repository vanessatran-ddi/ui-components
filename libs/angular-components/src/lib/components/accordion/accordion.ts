import { GoAAccordionHeadingSize } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-accordion",
  template: `
    <goa-accordion
      [heading]="heading"
      [secondarytext]="secondaryText"
      [open]="open"
      [headingsize]="headingSize"
    >
      <ng-content select="[slot=headingContent]" />
      <ng-content />
    </goa-accordion>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAAccordion {
  @Input() heading?: string;
  @Input() secondaryText: string = "";
  @Input() open?: boolean;
  @Input() headingSize?: GoAAccordionHeadingSize;
}

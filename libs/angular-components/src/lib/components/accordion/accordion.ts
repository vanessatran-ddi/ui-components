import { GoAAccordionHeadingSize, Spacing } from "@abgov/common";
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
      [testid]="testId"
      [mt]="mt"
      [mb]="mb"
      [ml]="ml"
      [mr]="mr"
    >
      <ng-content select="[slot=headingContent]" />
      <ng-content />
    </goa-accordion>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAAccordion {
  @Input() heading?: string;
  @Input() secondaryText?: string;
  @Input() testId?: string;
  @Input() open?: boolean;
  @Input() headingSize?: GoAAccordionHeadingSize;

  @Input() mt?: Spacing;
  @Input() mb?: Spacing;
  @Input() ml?: Spacing;
  @Input() mr?: Spacing;
}

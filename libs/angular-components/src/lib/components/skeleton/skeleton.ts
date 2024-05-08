import { GoASkeletonSize, GoASkeletonType, Spacing } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-skeleton",
  template: `
    <goa-skeleton
      [maxwidth]="maxWidth"
      [size]="size"
      [linecount]="lineCount"
      [type]="type"
      [testid]="testId"
      [mt]="mt"
      [mb]="mb"
      [ml]="ml"
      [mr]="mr"
    >
    </goa-skeleton>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoASkeleton {
  @Input({ required: true }) type!: GoASkeletonType;
  @Input() maxWidth?: string;
  @Input() size?: GoASkeletonSize;
  @Input() lineCount?: number;
  @Input() testId?: string;
  @Input() mt?: Spacing;
  @Input() mb?: Spacing;
  @Input() ml?: Spacing;
  @Input() mr?: Spacing;
}



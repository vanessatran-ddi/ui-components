import { GoASkeletonSize, GoASkeletonType } from "@abgov/common";
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
}



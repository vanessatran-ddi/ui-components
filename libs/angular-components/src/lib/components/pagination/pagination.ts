import { GoAPaginationVariant, Spacing } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from "@angular/core";

export type GoAPaginationOnChangeDetail = {
  page: number;
}

@Component({
  standalone: true,
  selector: "goax-pagination",
  template: `
    <goa-pagination
      [itemcount]="itemCount"
      [perpagecount]="perPageCount"
      [pagenumber]="pageNumber"
      [variant]="variant"
      [testid]="testId"
      [mt]="mt"
      [mb]="mb"
      [ml]="ml"
      [mr]="mr"

      (_change)="_onChange($event)"
    >
    </goa-pagination>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAPagination {
  @Input({ required: true }) itemCount!: number;
  @Input({ required: true }) pageNumber!: number;
  @Input() perPageCount?: number = 10;
  @Input() variant?: GoAPaginationVariant = "all";
  @Input() testId?: string;
  @Input() mt?: Spacing;
  @Input() mb?: Spacing;
  @Input() ml?: Spacing;
  @Input() mr?: Spacing;

  @Output() onChange = new EventEmitter<GoAPaginationOnChangeDetail>();

  _onChange(e: any) {
    const detail = (e as CustomEvent<GoAPaginationOnChangeDetail>).detail;
    this.onChange.emit(detail)
  }
}

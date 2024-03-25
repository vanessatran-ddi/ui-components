import { GoAFileUploadInputOnSelectFileDetail, GoAFileUploadInputVariant, Spacing } from "@abgov/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  standalone: true,
  selector: "goax-file-upload-input",
  template: `<goa-file-upload-input
    [variant]="variant"
    [maxfilesize]="maxFileSize"
    [id]="id"
    [mt]="mt"
    [mb]="mb"
    [mr]="mr"
    [ml]="ml"
    (_selectfile)="_onSelectFile($event)"
  >
  </goa-file-upload-input>`,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoAFileUploadInput {
  @Input() id?: string = "";
  @Input() mt?: Spacing;
  @Input() mb?: Spacing;
  @Input() mr?: Spacing;
  @Input() ml?: Spacing;
  @Input() variant?: GoAFileUploadInputVariant;
  @Input() maxFileSize?: string;

  @Output() onSelectFile = new EventEmitter<GoAFileUploadInputOnSelectFileDetail>();

  _onSelectFile(e: Event) {
    const detail = (e as CustomEvent<GoAFileUploadInputOnSelectFileDetail>).detail;
    this.onSelectFile.emit(detail);
  }
}

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAFileUploadInput } from "./file-upload-input";

let component: GoAFileUploadInput;
let fixture: ComponentFixture<GoAFileUploadInput>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAFileUploadInput],
  });
  fixture = TestBed.createComponent(GoAFileUploadInput);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

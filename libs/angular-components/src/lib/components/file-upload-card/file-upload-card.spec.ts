import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAFileUploadCard } from "./file-upload-card";

let component: GoAFileUploadCard;
let fixture: ComponentFixture<GoAFileUploadCard>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAFileUploadCard],
  });
  fixture = TestBed.createComponent(GoAFileUploadCard);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

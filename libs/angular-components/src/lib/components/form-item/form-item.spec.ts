import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAFormItem } from "./form-item";

let component: GoAFormItem;
let fixture: ComponentFixture<GoAFormItem>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAFormItem],
  });
  fixture = TestBed.createComponent(GoAFormItem);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoADatePicker } from "./date-picker";

let component: GoADatePicker;
let fixture: ComponentFixture<GoADatePicker>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoADatePicker],
  });
  fixture = TestBed.createComponent(GoADatePicker);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

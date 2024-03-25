import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAFormStepper } from "./form-stepper";

let component: GoAFormStepper;
let fixture: ComponentFixture<GoAFormStepper>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAFormStepper],
  });
  fixture = TestBed.createComponent(GoAFormStepper);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAFormStep } from "./form-step";

let component: GoAFormStep;
let fixture: ComponentFixture<GoAFormStep>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAFormStep],
  });
  fixture = TestBed.createComponent(GoAFormStep);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

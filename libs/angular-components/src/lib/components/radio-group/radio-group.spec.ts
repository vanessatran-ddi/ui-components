import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoARadioGroup } from "./radio-group";

let component: GoARadioGroup;
let fixture: ComponentFixture<GoARadioGroup>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoARadioGroup],
  });
  fixture = TestBed.createComponent(GoARadioGroup);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

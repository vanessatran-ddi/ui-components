import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoATooltip } from "./tooltip";

let component: GoATooltip;
let fixture: ComponentFixture<GoATooltip>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoATooltip],
  });
  fixture = TestBed.createComponent(GoATooltip);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

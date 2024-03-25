import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAAccordion } from "./accordion";

let component: GoAAccordion;
let fixture: ComponentFixture<GoAAccordion>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAAccordion],
  });
  fixture = TestBed.createComponent(GoAAccordion);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

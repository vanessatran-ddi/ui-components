import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoADivider } from "./divider";

let component: GoADivider;
let fixture: ComponentFixture<GoADivider>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoADivider],
  });
  fixture = TestBed.createComponent(GoADivider);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

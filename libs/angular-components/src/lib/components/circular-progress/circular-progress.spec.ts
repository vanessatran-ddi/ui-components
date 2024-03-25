import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoACircularProgress } from "./circular-progress";

let component: GoACircularProgress;
let fixture: ComponentFixture<GoACircularProgress>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoACircularProgress],
  });
  fixture = TestBed.createComponent(GoACircularProgress);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

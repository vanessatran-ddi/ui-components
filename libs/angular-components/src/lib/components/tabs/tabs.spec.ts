import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoATabs } from "./tabs";

let component: GoATabs;
let fixture: ComponentFixture<GoATabs>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoATabs],
  });
  fixture = TestBed.createComponent(GoATabs);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAButtonGroup } from "./button-group";

let component: GoAButtonGroup;
let fixture: ComponentFixture<GoAButtonGroup>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAButtonGroup],
  });
  fixture = TestBed.createComponent(GoAButtonGroup);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

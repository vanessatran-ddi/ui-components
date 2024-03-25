import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAContainer } from "./container";

let component: GoAContainer;
let fixture: ComponentFixture<GoAContainer>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAContainer],
  });
  fixture = TestBed.createComponent(GoAContainer);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

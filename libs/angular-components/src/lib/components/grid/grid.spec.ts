import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAGrid } from "./grid";

let component: GoAGrid;
let fixture: ComponentFixture<GoAGrid>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAGrid],
  });
  fixture = TestBed.createComponent(GoAGrid);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

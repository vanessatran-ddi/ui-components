import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAPagination } from "./pagination";

let component: GoAPagination;
let fixture: ComponentFixture<GoAPagination>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAPagination],
  });
  fixture = TestBed.createComponent(GoAPagination);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

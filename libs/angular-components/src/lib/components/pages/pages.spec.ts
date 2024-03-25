import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAPages } from "./pages";

let component: GoAPages;
let fixture: ComponentFixture<GoAPages>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAPages],
  });
  fixture = TestBed.createComponent(GoAPages);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

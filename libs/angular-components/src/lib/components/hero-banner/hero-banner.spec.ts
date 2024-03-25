import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAHeroBanner } from "./hero-banner";

let component: GoAHeroBanner;
let fixture: ComponentFixture<GoAHeroBanner>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAHeroBanner],
  });
  fixture = TestBed.createComponent(GoAHeroBanner);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

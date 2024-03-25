import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoASideMenuHeading } from "./side-menu-heading";

let component: GoASideMenuHeading;
let fixture: ComponentFixture<GoASideMenuHeading>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoASideMenuHeading],
  });
  fixture = TestBed.createComponent(GoASideMenuHeading);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoASideMenu } from "./side-menu";

let component: GoASideMenu;
let fixture: ComponentFixture<GoASideMenu>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoASideMenu],
  });
  fixture = TestBed.createComponent(GoASideMenu);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoASideMenuGroup } from "./side-menu-group";

let component: GoASideMenuGroup;
let fixture: ComponentFixture<GoASideMenuGroup>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoASideMenuGroup],
  });
  fixture = TestBed.createComponent(GoASideMenuGroup);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

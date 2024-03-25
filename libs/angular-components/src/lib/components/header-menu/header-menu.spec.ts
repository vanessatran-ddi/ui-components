import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAAppHeaderMenu } from "./header-menu";

let component: GoAAppHeaderMenu;
let fixture: ComponentFixture<GoAAppHeaderMenu>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAAppHeaderMenu],
  });
  fixture = TestBed.createComponent(GoAAppHeaderMenu);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

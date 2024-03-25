import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoAAppHeader } from "./header";

let component: GoAAppHeader;
let fixture: ComponentFixture<GoAAppHeader>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoAAppHeader],
  });
  fixture = TestBed.createComponent(GoAAppHeader);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

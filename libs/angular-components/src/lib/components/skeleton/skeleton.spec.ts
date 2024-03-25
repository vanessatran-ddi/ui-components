import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoASkeleton } from "./skeleton";

let component: GoASkeleton;
let fixture: ComponentFixture<GoASkeleton>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoASkeleton],
  });
  fixture = TestBed.createComponent(GoASkeleton);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

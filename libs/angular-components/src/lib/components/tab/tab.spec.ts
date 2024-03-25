import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoATab } from "./tab";

let component: GoATab;
let fixture: ComponentFixture<GoATab>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoATab],
  });
  fixture = TestBed.createComponent(GoATab);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

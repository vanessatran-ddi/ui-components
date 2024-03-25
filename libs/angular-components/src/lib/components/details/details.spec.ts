import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoADetails } from "./details";

let component: GoADetails;
let fixture: ComponentFixture<GoADetails>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoADetails],
  });
  fixture = TestBed.createComponent(GoADetails);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

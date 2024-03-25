import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoABlock } from "./block";

let component: GoABlock;
let fixture: ComponentFixture<GoABlock>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoABlock],
  });
  fixture = TestBed.createComponent(GoABlock);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

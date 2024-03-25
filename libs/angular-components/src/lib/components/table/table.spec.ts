import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GoATable } from "./table";

let component: GoATable;
let fixture: ComponentFixture<GoATable>;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [GoATable],
  });
  fixture = TestBed.createComponent(GoATable);
  component = fixture.componentInstance;
});

it("should render", () => {
  expect(component).toBeTruthy();
});

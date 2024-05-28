import { render, cleanup } from "@testing-library/react";
import { GoABFormItem } from "./form-item";

afterEach(cleanup);

describe("GoABFormItem", () => {
  it("renders all with properties", () => {
    const { baseElement } = render(
      <GoABFormItem
        label="First Name"
        requirement="optional"
        error="This is an error"
        helpText="This is some help text"
        id="firstName"
      />,
    );
    const el = baseElement.querySelector("goa-form-item");
    expect(el?.getAttribute("label")).toEqual("First Name");
    expect(el?.getAttribute("requirement")).toEqual("optional");
    expect(el?.getAttribute("error")).toEqual("This is an error");
    expect(el?.getAttribute("helptext")).toEqual("This is some help text");
    expect(el?.getAttribute("id")).toEqual("firstName");
  });
});

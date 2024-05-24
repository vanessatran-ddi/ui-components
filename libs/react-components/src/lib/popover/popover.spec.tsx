import { render } from "@testing-library/react";
import ABGovPopover from "./popover";

describe("Popover", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ABGovPopover target="Click Action">The content</ABGovPopover>
    );

    const el = baseElement.querySelector("goa-popover");
    expect(el?.querySelector("[slot='target']")?.innerHTML).toContain(
      "Click Action"
    );
    expect(baseElement.innerHTML).toContain("The content");
  });

  it("should bind all web-component attributes", () => {
    const { baseElement } = render(
      <ABGovPopover
        target="Click Action"
        maxWidth="500px"
        testId="foo"
        padded={false}
      >
        The content
      </ABGovPopover>
    );

    const el = baseElement.querySelector("goa-popover");
    expect(el?.getAttribute("maxwidth")).toBe("500px");
    expect(el?.getAttribute("padded")).toBe("false");
  });
});

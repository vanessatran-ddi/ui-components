import { render } from "@testing-library/react";
import GoABContainer from "./container";
import { GoABButton } from "../button/button";

describe("Container", () => {
  it("should render the properties", () => {
    const { container } = render(
      <GoABContainer
        type="interactive"
        accent="thick"
        padding="relaxed"
        title={"Text title"}
        width="content"
        maxWidth="480px"
        mt="s"
        mr="m"
        mb="l"
        ml="xl"
        actions={
          <GoABButton
            onClick={() => {
              /* do nothing */
            }}
          >
            Save
          </GoABButton>
        }
      >
        Container content
      </GoABContainer>,
    );

    const el = container.querySelector("goa-container");

    expect(el).toBeTruthy();
    expect(el?.getAttribute("type")).toEqual("interactive");
    expect(el?.getAttribute("accent")).toEqual("thick");
    expect(el?.getAttribute("padding")).toEqual("relaxed");
    expect(el?.getAttribute("mt")).toBe("s");
    expect(el?.getAttribute("mr")).toBe("m");
    expect(el?.getAttribute("mb")).toBe("l");
    expect(el?.getAttribute("ml")).toBe("xl");
    expect(el?.getAttribute("width")).toBe("content");
    expect(el?.getAttribute("maxwidth")).toBe("480px");

    expect(el?.querySelector("*[slot=title]")?.innerHTML).toContain("Text title");
    expect(
      el?.querySelector("*[slot=actions]")?.querySelector("goa-button"),
    ).not.toBeFalsy();
  });
});

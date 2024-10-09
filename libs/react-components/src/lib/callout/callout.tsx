import { Margins } from "../../common/styling";

export type GoACalloutType =
  | "important"
  | "information"
  | "event"
  | "success"
  | "emergency";

export type GoACalloutSize = "medium" | "large";
export type GoACalloutAriaLive = "off" | "polite" | "assertive";
export type GoACalloutIconSize = "small" | "medium" | "large" | "xlarge";
export type GoACalloutIconTheme = "outline" | "filled";

interface WCProps extends Margins {
  heading?: string;
  type?: GoACalloutType;
  size?: GoACalloutSize;
  maxwidth?: string;
  arialive?: GoACalloutAriaLive;
  iconsize?: GoACalloutIconSize;
  icontheme?: GoACalloutIconTheme;
  testid?: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "goa-callout": WCProps & React.HTMLAttributes<HTMLElement>;
    }
  }
}

export interface GoACalloutProps extends Margins {
  heading?: string;
  type?: GoACalloutType;
  size?: GoACalloutSize;
  iconSize?: GoACalloutIconSize;
  iconTheme?: GoACalloutIconTheme;
  maxWidth?: string;
  testId?: string;
  ariaLive?: GoACalloutAriaLive;
  children?: React.ReactNode;
}

export type CalloutProps = GoACalloutProps;

export const GoACallout = ({
  heading,
  type = "information",
  iconTheme = "outline",
  size = "large",
  maxWidth,
  testId,
  ariaLive = "off",
  iconSize,
  children,
  mt,
  mr,
  mb,
  ml,
}: GoACalloutProps) => {
  return (
    <goa-callout
      heading={heading}
      type={type}
      size={size}
      maxwidth={maxWidth}
      arialive={ariaLive}
      iconsize={iconSize}
      icontheme={iconTheme}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      testid={testId}
    >
      {children}
    </goa-callout>
  );
};

export default GoACallout;

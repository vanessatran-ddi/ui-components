import { GoAPopoverPosition, Margins } from "@abgov/common";
import { ReactNode } from "react";

interface WCProps extends Margins {
  maxwidth?: string;
  padded?: boolean;
  position?: GoAPopoverPosition;
  relative?: boolean;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "goa-popover": WCProps & React.HTMLAttributes<HTMLElement>;
    }
  }
}

export interface GoAPopoverProps extends Margins {
  target?: ReactNode;
  testId?: string;
  maxWidth?: string;
  padded?: boolean;
  position?: GoAPopoverPosition;
  children: ReactNode;
  relative?: boolean;
}

export function GoAPopover({
  target,
  testId,
  maxWidth,
  padded,
  position,
  relative,
  children,
  mt,
  mr,
  mb,
  ml,
}: GoAPopoverProps): JSX.Element {
  return (
    <goa-popover
      data-testid={testId}
      maxwidth={maxWidth}
      padded={padded}
      position={position}
      relative={relative}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
    >
      {children}
      {target && <div slot="target">{target}</div>}
    </goa-popover>
  );
}

export default GoAPopover;

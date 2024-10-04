import { ReactNode } from "react";

interface WCProps {
  open?: string;
  anchor?: string;
  heading?: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "goax-drawer": WCProps & React.HTMLAttributes<HTMLElement>;
    }
  }
}

/* eslint-disable-next-line */
export interface GoADrawerProps {
  open?: string;
  anchor?: string;
  heading?: string;
  children?: ReactNode;
}

export function GoADrawer({ open, anchor, heading, children }: GoADrawerProps): JSX.Element {
  return (
    <goax-drawer open={open} anchor={anchor} heading={heading}>
      {children}
    </goax-drawer>
  );
}

export default GoADrawer;

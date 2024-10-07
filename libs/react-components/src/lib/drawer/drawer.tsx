import { ReactNode, useEffect, useRef } from "react";

interface WCProps {
  open?: string;
  anchor?: string;
  heading?: string;
  ref: React.RefObject<HTMLElement>;
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
  open?: boolean;
  anchor?: string;
  heading?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export function GoADrawer({ open, anchor, heading, children, onClick }: GoADrawerProps): JSX.Element {
  const el = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!el.current) {
      return;
    }
    if (!onClick) {
      return;
    }
    const current = el.current;
    const listener = () => {
      onClick();
    }
    current.addEventListener("_click", listener);
    return () => {
      current.removeEventListener("_click", listener);
    };
  }, [el, onClick]);
  return (
    <goax-drawer
      ref={el}
      open={open ? "true" : undefined}
      anchor={anchor} heading={heading}>
      {children}
    </goax-drawer>
  );
}

export default GoADrawer;

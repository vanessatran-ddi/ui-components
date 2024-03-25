import { GoAIconType } from "@abgov/common";
import { ReactNode } from "react";

interface WCProps {
  icon?: GoAIconType;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements {
      "goa-side-menu-heading": WCProps & React.HTMLAttributes<HTMLElement>;
    }
  }
}

/* eslint-disable-next-line */
export interface GoASideMenuHeadingProps {
  meta?: ReactNode;
  icon?: GoAIconType
  children?: ReactNode;
}

export function GoASideMenuHeading(props: GoASideMenuHeadingProps) {
  return (
    <goa-side-menu-heading icon={props.icon}>
      {props.children}
      {props.meta && <span slot="meta">{props.meta}</span>}
    </goa-side-menu-heading>
  );
}

export default GoASideMenuHeading;

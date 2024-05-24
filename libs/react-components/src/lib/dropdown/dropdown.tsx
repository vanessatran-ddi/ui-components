import { ABGovDropdownOnChangeDetail, ABGovIconType, Margins } from "@abgov/ui-components-common";
import { useEffect, useRef } from "react";

interface WCProps extends Margins {
  ref: React.MutableRefObject<HTMLElement | null>;
  arialabel?: string;
  arialabelledby?: string;
  disabled?: boolean;
  error?: boolean;
  filterable?: boolean;
  leadingicon?: string;
  maxheight?: string;
  multiselect?: boolean;
  name?: string;
  native?: boolean;
  placeholder?: string;
  value?: string;
  width?: string;
  relative?: boolean;
  id?: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements {
      "goa-dropdown": WCProps & React.HTMLAttributes<HTMLElement>;
    }
  }
}

export interface ABGovDropdownProps extends Margins {
  name?: string;
  value?: string[] | string;
  onChange: (detail: ABGovDropdownOnChangeDetail) => void;

  // optional
  ariaLabel?: string;
  ariaLabelledBy?: string;
  id?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
  filterable?: boolean;
  leadingIcon?: ABGovIconType;
  maxHeight?: string;
  multiselect?: boolean;
  native?: boolean;
  placeholder?: string;
  testId?: string;
  width?: string;
  relative?: boolean;
}

function stringify(value: string | string[] | undefined): string {
  if (typeof value === "undefined") {
    return "";
  }
  if (typeof value === "string") {
    return value;
  }
  return JSON.stringify(value);
}

export function ABGovDropdown(props: ABGovDropdownProps): JSX.Element {
  const el = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!el.current) {
      return;
    }
    const current = el.current;
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<ABGovDropdownOnChangeDetail>).detail;
      props.onChange(detail);
    };
    current.addEventListener("_change", handler);
    return () => {
      current.removeEventListener("_change", handler);
    };
  }, [el, props]);

  return (
    <goa-dropdown
      ref={el}
      name={props.name}
      value={stringify(props.value)}
      arialabel={props.ariaLabel}
      arialabelledby={props.ariaLabelledBy}
      disabled={props.disabled}
      error={props.error}
      filterable={props.filterable}
      leadingicon={props.leadingIcon}
      maxheight={props.maxHeight}
      mb={props.mb}
      ml={props.ml}
      mr={props.mr}
      mt={props.mt}
      multiselect={props.multiselect}
      native={props.native}
      placeholder={props.placeholder}
      data-testid={props.testId}
      width={props.width}
      relative={props.relative}
      id={props.id}
    >
      {props.children}
    </goa-dropdown>
  );
}

export default ABGovDropdown;

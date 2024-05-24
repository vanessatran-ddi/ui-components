import { ABGovTextAreaCountBy, Margins } from "@abgov/ui-components-common";
import { useEffect, useRef } from "react";

interface WCProps extends Margins {
  ref: React.Ref<HTMLTextAreaElement>;
  name: string;
  value?: string;
  placeholder?: string;
  rows?: number;
  error?: boolean;
  disabled?: boolean;
  width?: string;
  arialabel?: string;
  countby?: ABGovTextAreaCountBy;
  maxcount?: number;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "goa-textarea": WCProps & React.HTMLAttributes<HTMLElement>;
    }
  }
}

export interface ABGovTextAreaProps extends Margins {
  name: string;
  value?: string;
  id?: string;
  placeholder?: string;
  rows?: number;
  error?: boolean;
  disabled?: boolean;
  width?: string;
  testId?: string;
  ariaLabel?: string;
  countBy?: ABGovTextAreaCountBy;
  maxCount?: number;

  onChange: (name: string, value: string) => void;
  onKeyPress?: (name: string, value: string, key: string) => void;
}

export function ABGovTextarea({
  name,
  value,
  placeholder,
  rows,
  disabled,
  countBy,
  maxCount,
  width,
  testId,
  error,
  ariaLabel,
  mt,
  mr,
  mb,
  ml,
  onChange,
  onKeyPress,
}: ABGovTextAreaProps): JSX.Element {
  const el = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!el.current) {
      return;
    }
    const current = el.current;
    const listener: EventListener = (e: unknown) => {
      const { name, value } = (e as CustomEvent).detail;
      onChange(name, value);
    };

    current.addEventListener("_change", listener);
    return () => {
      current.removeEventListener("_change", listener);
    };
  }, [el, onChange]);


  useEffect(() => {
    if (!el.current) {
      return;
    }
    const current = el.current;
    const keypressListener = (e: unknown) => {
      const { name, value, key } = (e as CustomEvent).detail;
      onKeyPress?.(name, value, key);
    }

    current.addEventListener("_keyPress", keypressListener);
    return () => {
      current.removeEventListener("_keyPress", keypressListener);
    };
  }, [el, onKeyPress]);

  return (
    <goa-textarea
      ref={el}
      name={name}
      placeholder={placeholder}
      value={value}
      rows={rows}
      disabled={disabled}
      countby={countBy}
      maxcount={maxCount}
      width={width}
      error={error}
      data-testid={testId}
      arialabel={ariaLabel}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
    ></goa-textarea>
  );
}

export {ABGovTextarea as ABGovTextArea}
export default ABGovTextarea;


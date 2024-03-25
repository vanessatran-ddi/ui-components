import { GoAFileUploadInputOnSelectFileDetail, GoAFileUploadInputVariant } from "@abgov/common";
import { useEffect, useRef } from "react";

interface WCProps {
  ref: React.MutableRefObject<HTMLElement | null>;
  variant?: GoAFileUploadInputVariant;
  accept?: string;
  maxfilesize?: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements {
      "goa-file-upload-input": WCProps & React.HTMLAttributes<HTMLElement>;
    }
  }
}

/* eslint-disable-next-line */
export interface GoAFileUploadInputProps {
  variant?: GoAFileUploadInputVariant;
  accept?: string;
  maxFileSize?: string;
  onSelectFile: (detail: GoAFileUploadInputOnSelectFileDetail) => void;
}

export function GoAFileUploadInput({
  variant,
  accept,
  maxFileSize,
  onSelectFile,
}: GoAFileUploadInputProps) {
  const el = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!el.current) return;

    const current = el.current;
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<GoAFileUploadInputOnSelectFileDetail>).detail;
      onSelectFile(detail);
    };
    current.addEventListener("_selectFile", handler);
    return () => {
      current.removeEventListener("_selectFile", handler);
    };
  }, [el, onSelectFile]);

  return (
    <goa-file-upload-input
      ref={el}
      variant={variant}
      accept={accept}
      maxfilesize={maxFileSize}
    />
  );
}

export default GoAFileUploadInput;

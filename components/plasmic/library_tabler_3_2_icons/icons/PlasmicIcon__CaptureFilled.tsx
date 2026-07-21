/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CaptureFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CaptureFilledIcon(props: CaptureFilledIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 3a1 1 0 01.117 1.993L8 5H6a1 1 0 00-.993.883L5 6v2a1 1 0 01-1.993.117L3 8V6a3 3 0 012.824-2.995L6 3h2zM4 15a1 1 0 01.993.883L5 16v2a1 1 0 00.883.993L6 19h2a1 1 0 01.117 1.993L8 21H6a3 3 0 01-2.995-2.824L3 18v-2a1 1 0 011-1zM18 3a3 3 0 012.995 2.824L21 6v2a1 1 0 01-1.993.117L19 8V6a1 1 0 00-.883-.993L18 5h-2a1 1 0 01-.117-1.993L16 3h2zm2 12a1 1 0 01.993.883L21 16v2a3 3 0 01-2.824 2.995L18 21h-2a1 1 0 01-.117-1.993L16 19h2a1 1 0 00.993-.883L19 18v-2a1 1 0 011-1zm-8-7a4 4 0 11-3.995 4.2L8 12l.005-.2A4 4 0 0112 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CaptureFilledIcon;
/* prettier-ignore-end */

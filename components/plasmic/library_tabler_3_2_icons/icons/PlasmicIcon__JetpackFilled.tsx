/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type JetpackFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function JetpackFilledIcon(props: JetpackFilledIconProps) {
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
          "M17 2a4 4 0 014 4v7a1 1 0 01-1 1h-6a1 1 0 01-1-1v-1h-2v1a1 1 0 01-1 1H4a1 1 0 01-1-1V6a4 4 0 018 0v1h2V6a4 4 0 014-4zm-4 8V9h-2v1h2zm-4 5a1 1 0 011 1c0 2.623-.787 4.59-2.4 5.8a1 1 0 01-1.2 0C4.787 20.59 4 18.623 4 16a1 1 0 112 0c0 1.532.308 2.684.906 3.498l.094.119.094-.12c.558-.759.864-1.813.902-3.196L8 16a1 1 0 011-1zm10 0a1 1 0 011 1c0 2.623-.787 4.59-2.4 5.8a1 1 0 01-1.2 0C14.787 20.59 14 18.623 14 16a1 1 0 012 0c0 1.532.308 2.684.906 3.498l.094.119.094-.12c.558-.759.864-1.813.902-3.196L18 16a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default JetpackFilledIcon;
/* prettier-ignore-end */

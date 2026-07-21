/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InvoiceIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InvoiceIcon(props: InvoiceIconProps) {
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
        d={"M14 3v4a1 1 0 001 1h4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M19 12v7a1.78 1.78 0 01-3.1 1.4 1.651 1.651 0 00-2.6 0 1.651 1.651 0 01-2.6 0 1.651 1.651 0 00-2.6 0A1.78 1.78 0 015 19V5a2 2 0 012-2h7l5 5v4.25"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default InvoiceIcon;
/* prettier-ignore-end */

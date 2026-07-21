/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LegoFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LegoFilledIcon(props: LegoFilledIconProps) {
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
          "M16 2a1 1 0 011 1v1l.2.005A4 4 0 0120.995 7.8L21 8v9a4 4 0 01-2.845 3.83l-.155.043V21a1 1 0 01-.883.993L17 22H7a1 1 0 01-1-1v-.127l-.155-.042a4 4 0 01-2.84-3.631L3 17V8a4 4 0 014-4V3a1 1 0 011-1h8zm-.8 12.286a1 1 0 00-1.414.014 2.5 2.5 0 01-3.572 0 1 1 0 00-1.428 1.4 4.501 4.501 0 006.428 0 1 1 0 00-.014-1.414zM9.51 10H9.5a1 1 0 000 2h.01a1 1 0 000-2zm5 0h-.01a1 1 0 000 2h.01a1 1 0 000-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LegoFilledIcon;
/* prettier-ignore-end */

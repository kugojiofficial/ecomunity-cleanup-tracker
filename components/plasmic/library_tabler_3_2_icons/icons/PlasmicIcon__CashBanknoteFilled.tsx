/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CashBanknoteFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CashBanknoteFilledIcon(props: CashBanknoteFilledIconProps) {
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
          "M19 5a3 3 0 013 3v8a3 3 0 01-3 3H5a3 3 0 01-3-3V8a3 3 0 013-3h14zm-7 4a3 3 0 00-2.996 2.85L9 12a3 3 0 103-3zm6.01 2H18a1 1 0 000 2h.01a1 1 0 000-2zm-12 0H6a1.002 1.002 0 00-.917 1.387A1 1 0 006.01 13a1 1 0 000-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CashBanknoteFilledIcon;
/* prettier-ignore-end */

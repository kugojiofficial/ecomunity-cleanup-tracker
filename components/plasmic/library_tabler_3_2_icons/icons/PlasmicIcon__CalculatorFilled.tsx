/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalculatorFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalculatorFilledIcon(props: CalculatorFilledIconProps) {
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
          "M18 2a3 3 0 013 3v14a3 3 0 01-3 3H6a3 3 0 01-3-3V5a3 3 0 013-3h12zM8 17a1 1 0 00-1 1l.007.127A1 1 0 009 18.01l-.007-.127A1 1 0 008 17zm4 0a1 1 0 00-1 1l.007.127A1 1 0 0013 18.01l-.007-.127A1 1 0 0012 17zm4 0a1 1 0 00-1 1l.007.127A1 1 0 0017 18.01l-.007-.127A1 1 0 0016 17zm-8-4a1 1 0 00-1 1l.007.127A1 1 0 009 14.01l-.007-.127A1 1 0 008 13zm4 0a1 1 0 00-1 1l.007.127A1 1 0 0013 14.01l-.007-.127A1 1 0 0012 13zm4 0a1 1 0 00-1 1l.007.127A1 1 0 0017 14.01l-.007-.127A1 1 0 0016 13zm-1-7H9a2 2 0 00-2 2v1a2 2 0 002 2h6a2 2 0 002-2V8a2 2 0 00-2-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CalculatorFilledIcon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CreditCardOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CreditCardOffIcon(props: CreditCardOffIconProps) {
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
          "M3 3l18 18M9 5h9a3 3 0 013 3v8c0 .295-.043.588-.128.87m-2.002 2.002A2.999 2.999 0 0118 19H6a3 3 0 01-3-3V8a3 3 0 012.124-2.87M3 11h8m4 0h6M7 15h.01M11 15h2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CreditCardOffIcon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ReceiptOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ReceiptOffIcon(props: ReceiptOffIconProps) {
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
          "M5 5v16l3-2 2 2 2-2 2 2 2-2 3 2v-1.99M7 3h10a2 2 0 012 2v10m-8-8h4m-6 4h2m2 4h2m0-4v.01M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ReceiptOffIcon;
/* prettier-ignore-end */

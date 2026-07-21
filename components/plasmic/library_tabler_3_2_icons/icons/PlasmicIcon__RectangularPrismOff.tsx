/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RectangularPrismOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RectangularPrismOffIcon(props: RectangularPrismOffIconProps) {
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
          "M8.18 8.18L4 10.273c-.619.355-1 1.01-1 1.718v5.018c0 .709.381 1.363 1 1.717l4 2.008a2.016 2.016 0 002 0l7.146-3.578m2.67-1.337l.184-.093c.619-.355 1-1.01 1-1.718V8.99a1.98 1.98 0 00-1-1.717l-4-2.008a2.016 2.016 0 00-2 0L10.854 6.84M9 21v-7.5m0 0l3.048-1.458m2.71-1.296L20.5 8m-17 3L9 13.5M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RectangularPrismOffIcon;
/* prettier-ignore-end */

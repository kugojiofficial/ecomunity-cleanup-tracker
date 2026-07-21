/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RectangularPrismIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RectangularPrismIcon(props: RectangularPrismIconProps) {
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
          "M21 14.008V8.99a1.98 1.98 0 00-1-1.717l-4-2.008a2.016 2.016 0 00-2 0L4 10.273c-.619.355-1 1.01-1 1.718v5.018c0 .709.381 1.363 1 1.717l4 2.008a2.016 2.016 0 002 0l10-5.008c.619-.355 1-1.01 1-1.718zM9 21v-7.5m0 0L20.5 8m-17 3L9 13.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RectangularPrismIcon;
/* prettier-ignore-end */

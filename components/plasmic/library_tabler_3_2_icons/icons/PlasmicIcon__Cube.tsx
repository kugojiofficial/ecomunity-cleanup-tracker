/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CubeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CubeIcon(props: CubeIconProps) {
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
          "M21 16.008V7.99a1.98 1.98 0 00-1-1.717l-7-4.008a2.016 2.016 0 00-2 0L4 6.273c-.619.355-1 1.01-1 1.718v8.018c0 .709.381 1.363 1 1.717l7 4.008a2.016 2.016 0 002 0l7-4.008c.619-.355 1-1.01 1-1.718zM12 22V12m0 0l8.73-5.04m-17.46 0L12 12"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CubeIcon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ButterflyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ButterflyIcon(props: ButterflyIconProps) {
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
          "M12 18.176a3 3 0 11-4.953-2.449l-.025.023A4.502 4.502 0 018.505 7c1.414 0 2.675.652 3.5 1.671a4.5 4.5 0 114.983 7.079 2.999 2.999 0 01-2.207 5.243A3 3 0 0112.005 18l-.005.176zM12 19V9M9 3l3 2 3-2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ButterflyIcon;
/* prettier-ignore-end */

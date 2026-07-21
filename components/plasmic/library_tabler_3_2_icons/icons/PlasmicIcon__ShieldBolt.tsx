/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShieldBoltIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShieldBoltIcon(props: ShieldBoltIconProps) {
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
          "M13.342 20.566c-.436.17-.884.315-1.342.434A12 12 0 013.5 6 12 12 0 0012 3a12 12 0 008.5 3 12 12 0 01.117 6.34M19 16l-2 3h4l-2 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ShieldBoltIcon;
/* prettier-ignore-end */

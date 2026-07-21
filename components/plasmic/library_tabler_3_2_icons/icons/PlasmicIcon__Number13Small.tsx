/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Number13SmallIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Number13SmallIcon(props: Number13SmallIconProps) {
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
          "M7 10l2-2v8m4-8h2.5A1.5 1.5 0 0117 9.5v1a1.5 1.5 0 01-1.5 1.5m0 0H14m1.5 0a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5H13"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Number13SmallIcon;
/* prettier-ignore-end */

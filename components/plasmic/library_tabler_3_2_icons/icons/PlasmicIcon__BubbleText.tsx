/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BubbleTextIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BubbleTextIcon(props: BubbleTextIconProps) {
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
          "M7 10h10m-8 4h5M12.4 3a5.34 5.34 0 014.906 3.239 5.333 5.333 0 01-1.195 10.6 4.26 4.26 0 01-5.28 1.863L7 21v-3.134a2.669 2.669 0 01-1.795-3.773A4.8 4.8 0 018.113 5.16 5.33 5.33 0 0112.4 3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BubbleTextIcon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BubbleXIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BubbleXIcon(props: BubbleXIconProps) {
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
          "M13.5 18.75c-.345.09-.727.25-1.1.25a4.3 4.3 0 01-1.57-.298L7 21v-3.134a2.669 2.669 0 01-1.795-3.773A4.8 4.8 0 018.113 5.16a5.335 5.335 0 019.194 1.078 5.333 5.333 0 014.484 6.778M22 22l-5-5m0 5l5-5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BubbleXIcon;
/* prettier-ignore-end */

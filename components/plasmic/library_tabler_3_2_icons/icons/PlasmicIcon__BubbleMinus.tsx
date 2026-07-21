/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BubbleMinusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BubbleMinusIcon(props: BubbleMinusIconProps) {
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
          "M12.4 19a4.22 4.22 0 01-1.57-.298L7 21v-3.134a2.669 2.669 0 01-1.795-3.773A4.8 4.8 0 018.113 5.16a5.335 5.335 0 019.194 1.078 5.333 5.333 0 013.404 8.771M16 19h6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BubbleMinusIcon;
/* prettier-ignore-end */

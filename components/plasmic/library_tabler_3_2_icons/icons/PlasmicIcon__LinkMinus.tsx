/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LinkMinusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LinkMinusIcon(props: LinkMinusIconProps) {
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
          "M9 15l6-6m-4-3l.463-.536a5 5 0 017.071 7.072L18 13m-5.397 5.534a5.07 5.07 0 01-7.127 0 4.972 4.972 0 010-7.071L6 11m10 8h6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LinkMinusIcon;
/* prettier-ignore-end */

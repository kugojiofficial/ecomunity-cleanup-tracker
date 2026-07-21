/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NeedleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NeedleIcon(props: NeedleIconProps) {
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
          "M3 21c-.667-.667 3.262-6.236 11.785-16.709a3.5 3.5 0 115.078 4.791C9.288 17.694 3.667 21.667 3 21zM17.5 6.5l-1 1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default NeedleIcon;
/* prettier-ignore-end */

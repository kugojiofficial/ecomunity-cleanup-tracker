/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Volume3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Volume3Icon(props: Volume3IconProps) {
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
          "M6 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h2l3.5-4.5A.8.8 0 0111 5v14a.8.8 0 01-1.5.5L6 15zm10-5l4 4m0-4l-4 4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Volume3Icon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MickeyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MickeyIcon(props: MickeyIconProps) {
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
          "M5.5 3a3.5 3.5 0 013.25 4.8 7.017 7.017 0 00-2.424 2.1A3.5 3.5 0 115.5 3zm13 0a3.5 3.5 0 11-.826 6.902 7.013 7.013 0 00-2.424-2.103A3.5 3.5 0 0118.5 3z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M5 14a7 7 0 1014 0 7 7 0 00-14 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MickeyIcon;
/* prettier-ignore-end */

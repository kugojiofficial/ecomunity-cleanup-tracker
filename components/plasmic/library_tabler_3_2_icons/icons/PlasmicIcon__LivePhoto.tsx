/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LivePhotoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LivePhotoIcon(props: LivePhotoIconProps) {
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
        d={"M11 12a1 1 0 102 0 1 1 0 00-2 0z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7 12a5 5 0 1010 0 5 5 0 00-10 0zm8.9 8.11v.01m3.14-2.51v.01M20.77 14v.01m0-4.01v.01m-1.73-3.62v.01M15.9 3.89v.01M12 3v.01m-3.9.88v.01M4.96 6.39v.01M3.23 10v.01m0 3.99v.01m1.73 3.6v.01m3.14 2.49v.01M12 21v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LivePhotoIcon;
/* prettier-ignore-end */

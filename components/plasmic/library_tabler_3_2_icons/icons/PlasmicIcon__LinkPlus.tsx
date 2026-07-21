/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LinkPlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LinkPlusIcon(props: LinkPlusIconProps) {
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
          "M9 15l6-6m-4-3l.463-.536a5 5 0 018.158 1.622 4.993 4.993 0 01-1.087 5.45m-5.931 5.998a5.07 5.07 0 01-7.127 0 4.972 4.972 0 010-7.071L6 11m10 8h6m-3-3v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LinkPlusIcon;
/* prettier-ignore-end */

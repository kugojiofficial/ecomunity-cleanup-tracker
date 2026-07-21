/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LinkIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LinkIcon(props: LinkIconProps) {
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
          "M9 15l6-6m-4-3l.463-.536a5 5 0 017.071 7.072L18 13m-5 5l-.397.534a5.068 5.068 0 01-7.127 0 4.972 4.972 0 010-7.071L6 11"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LinkIcon;
/* prettier-ignore-end */

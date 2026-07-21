/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MopedIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MopedIcon(props: MopedIconProps) {
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
          "M16 17a2 2 0 104 0 2 2 0 00-4 0zM5 16v1a2 2 0 004 0v-5H6a3 3 0 00-3 3v1h10a6 6 0 015-4V7a2 2 0 00-2-2h-1M6 9h3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MopedIcon;
/* prettier-ignore-end */

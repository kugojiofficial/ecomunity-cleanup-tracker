/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoodSmileDizzyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoodSmileDizzyIcon(props: MoodSmileDizzyIconProps) {
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
          "M3 12a9 9 0 1018.001 0A9 9 0 003 12zm11.5 3a3.5 3.5 0 01-5 0M8 9l2 2m0-2l-2 2m6-2l2 2m0-2l-2 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MoodSmileDizzyIcon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoodBoyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoodBoyIcon(props: MoodBoyIconProps) {
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
          "M17 4.5a9 9 0 013.864 5.89 2.5 2.5 0 01-.29 4.36 9 9 0 01-17.137 0 2.5 2.5 0 01-.29-4.36 9 9 0 013.746-5.81M9.5 16a3.5 3.5 0 005 0m-6-14C10 3 11 5.5 11 7m1.5-5c1.5 2 2 3.5 2 5M9 12h.01M15 12h.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MoodBoyIcon;
/* prettier-ignore-end */

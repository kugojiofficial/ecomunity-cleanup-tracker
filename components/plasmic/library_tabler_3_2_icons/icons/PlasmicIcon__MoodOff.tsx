/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoodOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoodOffIcon(props: MoodOffIconProps) {
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
          "M5.634 5.638a9 9 0 1012.732 12.724m1.679-2.322A9 9 0 007.965 3.954M9 10h.01M15 10h.01M9.5 15a3.5 3.5 0 005 0M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MoodOffIcon;
/* prettier-ignore-end */

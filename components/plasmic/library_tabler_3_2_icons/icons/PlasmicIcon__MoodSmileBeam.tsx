/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoodSmileBeamIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoodSmileBeamIcon(props: MoodSmileBeamIconProps) {
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
          "M12 21a9 9 0 110-18 9 9 0 010 18zm-2-11c-.5-1-2.5-1-3 0m10 0c-.5-1-2.5-1-3 0m.5 5a3.5 3.5 0 01-5 0"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MoodSmileBeamIcon;
/* prettier-ignore-end */

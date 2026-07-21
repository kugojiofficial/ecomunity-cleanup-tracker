/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoodPuzzledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoodPuzzledIcon(props: MoodPuzzledIconProps) {
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
          "M14.986 3.51A9 9 0 1016.5 19.794c2.489-1.437 4.181-3.978 4.5-6.794m-11-3h.01M14 8h.01M12 15c1-1.333 2-2 3-2m5-4v.01M20 6a2.003 2.003 0 00.914-3.782 1.98 1.98 0 00-2.414.483"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MoodPuzzledIcon;
/* prettier-ignore-end */

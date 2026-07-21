/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoodWrrrIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoodWrrrIcon(props: MoodWrrrIconProps) {
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
        d={"M12 21a9 9 0 110-18 9 9 0 010 18z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M8 16l1-1 1.5 1 1.5-1 1.5 1 1.5-1 1 1m-7.5-4.5L10 10 8.5 8.5m7 3L14 10l1.5-1.5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MoodWrrrIcon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoodHeartIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoodHeartIcon(props: MoodHeartIconProps) {
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
          "M21 12a9 9 0 10-8.012 8.946M9 10h.01M15 10h.01M9.5 15a3.59 3.59 0 002.774.99"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M18.994 21.5l2.518-2.58a1.74 1.74 0 00.004-2.413 1.628 1.628 0 00-2.346-.005l-.168.172-.168-.172a1.627 1.627 0 00-2.346-.004 1.74 1.74 0 00-.004 2.412l2.51 2.59z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MoodHeartIcon;
/* prettier-ignore-end */

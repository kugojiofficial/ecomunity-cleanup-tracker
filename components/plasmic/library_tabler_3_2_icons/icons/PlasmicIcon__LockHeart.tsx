/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LockHeartIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LockHeartIcon(props: LockHeartIconProps) {
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
          "M11.5 21H7a2 2 0 01-2-2v-6a2 2 0 012-2h10c.38 0 .734.106 1.037.29M8 11V7a4 4 0 018 0v4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M18 22l3.35-3.284a2.143 2.143 0 00.005-3.071 2.242 2.242 0 00-3.129-.006l-.224.22-.223-.22a2.242 2.242 0 00-3.128-.006 2.143 2.143 0 00-.006 3.071L18 22z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LockHeartIcon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HeartsOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HeartsOffIcon(props: HeartsOffIconProps) {
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
          "M14.017 18L12 20l-7.5-7.428a5 5 0 01.49-7.586m3.01-1a5 5 0 014 2.018 5 5 0 018.153 5.784"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M11.814 11.814a2.81 2.81 0 00-.007 3.948L15.989 20l2.01-2.021m1.977-1.99l.211-.212a2.81 2.81 0 000-3.948 2.748 2.748 0 00-3.91-.007l-.283.178M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HeartsOffIcon;
/* prettier-ignore-end */

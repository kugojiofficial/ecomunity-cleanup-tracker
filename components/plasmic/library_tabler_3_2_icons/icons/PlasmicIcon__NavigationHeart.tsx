/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NavigationHeartIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NavigationHeartIcon(props: NavigationHeartIconProps) {
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
          "M15.721 11.067L12 3 4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116l5.614-1.903M18 22l3.35-3.284a2.143 2.143 0 00.005-3.071 2.242 2.242 0 00-3.129-.006l-.224.22-.223-.22a2.242 2.242 0 00-3.128-.006 2.143 2.143 0 00-.006 3.071L18 22z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default NavigationHeartIcon;
/* prettier-ignore-end */

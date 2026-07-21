/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NavigationTopIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NavigationTopIcon(props: NavigationTopIconProps) {
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
          "M16.54 19.977a.34.34 0 00.357-.07.33.33 0 00.084-.35L12 9 7.018 19.557a.33.33 0 00.252.437.34.34 0 00.189-.017L12 18.5l4.54 1.477zM12 3v2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default NavigationTopIcon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ABOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ABOffIcon(props: ABOffIconProps) {
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
          "M3 16v-5.5a2.5 2.5 0 115 0V16m0-4H3m9 0v6m0-12v2m7 4a2 2 0 000-4h-3v4h3zm0 0a2 2 0 01.83 3.82M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ABOffIcon;
/* prettier-ignore-end */

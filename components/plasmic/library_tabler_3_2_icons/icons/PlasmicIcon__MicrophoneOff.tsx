/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MicrophoneOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MicrophoneOffIcon(props: MicrophoneOffIconProps) {
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
          "M3 3l18 18M9 5a3 3 0 116 0v5c0 .296-.044.59-.13.874m-2 2A3 3 0 019 10.002v-1"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M5 10a7 7 0 0010.846 5.85m2-2A6.967 6.967 0 0018.998 10M8 21h8m-4-4v4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MicrophoneOffIcon;
/* prettier-ignore-end */

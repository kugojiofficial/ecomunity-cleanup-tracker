/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MusicOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MusicOffIcon(props: MusicOffIconProps) {
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
          "M3 17a3 3 0 106 0 3 3 0 00-6 0zm11.42-2.55a3.002 3.002 0 00-.535 4.675 2.998 2.998 0 004.673-.556M9 17V9m0-4V4h10v11m-7-7h7M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MusicOffIcon;
/* prettier-ignore-end */

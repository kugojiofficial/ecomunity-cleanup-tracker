/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MusicQuestionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MusicQuestionIcon(props: MusicQuestionIconProps) {
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
          "M3 17a3 3 0 106 0 3 3 0 00-6 0zm6 0V4h10v7M9 8h10m0 14v.01M19 19a2.003 2.003 0 00.914-3.782 1.98 1.98 0 00-2.414.483"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MusicQuestionIcon;
/* prettier-ignore-end */

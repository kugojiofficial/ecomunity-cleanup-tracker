/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FileInfinityIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FileInfinityIcon(props: FileInfinityIconProps) {
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
          "M15.536 17.586a2.123 2.123 0 00-2.929 0 1.952 1.952 0 000 2.828c.809.781 2.12.781 2.929 0m0 0c-.805.778.809-.781 0 0zm0 0l1.46-1.41 1.46-1.419"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M15.54 17.582l1.46 1.42 1.46 1.41m0 0c-.805-.779.809.78 0 0zm0 0c.805.779 2.12.781 2.929 0a1.95 1.95 0 000-2.828 2.123 2.123 0 00-2.929 0M14 3v4a1 1 0 001 1h4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M9.5 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v6"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FileInfinityIcon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FileSettingsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FileSettingsIcon(props: FileSettingsIconProps) {
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
          "M10 14a2 2 0 104 0 2 2 0 00-4 0zm2-3.5V12m0 4v1.5m3.031-5.25l-1.299.75m-3.464 2l-1.3.75m6.032.053l-1.285-.773m-3.43-2.06L9 12.197M14 3v4a1 1 0 001 1h4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FileSettingsIcon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceImacQuestionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceImacQuestionIcon(props: DeviceImacQuestionIconProps) {
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
          "M14 17H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v7.5M3 13h11.5M8 21h7m-5-4l-.5 4m4.5-4l.5 4m4.5 1v.01M19 19a2.003 2.003 0 00.914-3.782 1.98 1.98 0 00-2.414.483"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceImacQuestionIcon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceMobileQuestionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceMobileQuestionIcon(props: DeviceMobileQuestionIconProps) {
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
          "M15 21H8a2 2 0 01-2-2V5a2 2 0 012-2h8a2 2 0 012 2v6m1 11v.01M19 19a2.003 2.003 0 00.914-3.782 1.98 1.98 0 00-2.414.483M11 4h2m-1 13v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceMobileQuestionIcon;
/* prettier-ignore-end */

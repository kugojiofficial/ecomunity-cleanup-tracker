/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceMobileCodeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceMobileCodeIcon(props: DeviceMobileCodeIconProps) {
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
          "M11.5 21H8a2 2 0 01-2-2V5a2 2 0 012-2h8a2 2 0 012 2v8m2 8l2-2-2-2m-3 0l-2 2 2 2M11 4h2m-1 13v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceMobileCodeIcon;
/* prettier-ignore-end */

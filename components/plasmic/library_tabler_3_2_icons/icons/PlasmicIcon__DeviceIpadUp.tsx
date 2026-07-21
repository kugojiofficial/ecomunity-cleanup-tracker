/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceIpadUpIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceIpadUpIcon(props: DeviceIpadUpIconProps) {
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
          "M9 18h3m7 4v-6m3 3l-3-3-3 3m-2.5 2H7a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2v7"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceIpadUpIcon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceSpeakerOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceSpeakerOffIcon(props: DeviceSpeakerOffIconProps) {
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
          "M7 3h10a2 2 0 012 2v10m0 4a2 2 0 01-2 2H7a2 2 0 01-2-2V5m6.114 6.133a3 3 0 103.754 3.751M12 7v.01M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceSpeakerOffIcon;
/* prettier-ignore-end */

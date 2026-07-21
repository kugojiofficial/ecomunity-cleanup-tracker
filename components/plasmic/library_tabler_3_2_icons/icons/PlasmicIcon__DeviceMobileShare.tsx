/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceMobileShareIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceMobileShareIcon(props: DeviceMobileShareIconProps) {
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
          "M12 21H8a2 2 0 01-2-2V5a2 2 0 012-2h8a2 2 0 012 2v8m-7-9h2m3 18l5-5m0 4.5V17h-4.5M12 17v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceMobileShareIcon;
/* prettier-ignore-end */

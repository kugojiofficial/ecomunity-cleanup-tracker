/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceIpadHorizontalUpIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceIpadHorizontalUpIcon(
  props: DeviceIpadHorizontalUpIconProps
) {
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
          "M12 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v6.5M9 17h3.5m6.5 5v-6m3 3l-3-3-3 3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceIpadHorizontalUpIcon;
/* prettier-ignore-end */

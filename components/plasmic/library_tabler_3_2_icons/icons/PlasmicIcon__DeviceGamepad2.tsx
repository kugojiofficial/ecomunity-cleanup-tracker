/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DeviceGamepad2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DeviceGamepad2Icon(props: DeviceGamepad2IconProps) {
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
          "M12 5h3.5a5 5 0 110 10H10l-4.015 4.227a2.3 2.3 0 01-3.923-2.035l1.634-8.173A5 5 0 018.6 5H12z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M14 15l4.07 4.284a2.3 2.3 0 003.925-2.023l-1.6-8.232M8 9v2m-1-1h2m5 0h2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DeviceGamepad2Icon;
/* prettier-ignore-end */

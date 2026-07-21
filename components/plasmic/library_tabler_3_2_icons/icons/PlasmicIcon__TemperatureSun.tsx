/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TemperatureSunIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TemperatureSunIcon(props: TemperatureSunIconProps) {
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
          "M4 13.5a4 4 0 104 0V5a2 2 0 10-4 0v8.5zM4 9h4m5 7a4 4 0 100-8 4.07 4.07 0 00-1 .124M13 3v1m8 8h1m-9 8v1m6.4-15.4l-.7.7m0 11.4l.7.7"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TemperatureSunIcon;
/* prettier-ignore-end */

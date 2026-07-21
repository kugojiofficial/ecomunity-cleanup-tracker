/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleNumber5FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleNumber5FilledIcon(props: CircleNumber5FilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm2 5h-4a1 1 0 00-.993.883L9 8v4a1 1 0 00.883.993L10 13h3v2h-2l-.007-.117A1 1 0 009 15a2 2 0 001.85 1.995L11 17h2a2 2 0 001.995-1.85L15 15v-2a2 2 0 00-1.85-1.995L13 11h-2V9h3a1 1 0 00.993-.883L15 8a1 1 0 00-.883-.993L14 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleNumber5FilledIcon;
/* prettier-ignore-end */

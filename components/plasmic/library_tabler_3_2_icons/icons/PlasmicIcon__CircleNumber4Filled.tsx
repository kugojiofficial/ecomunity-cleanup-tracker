/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleNumber4FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleNumber4FilledIcon(props: CircleNumber4FilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm2 5a1 1 0 00-.993.883L13 8v3h-2V8l-.007-.117a1 1 0 00-1.986 0L9 8v3l.005.15a2 2 0 001.838 1.844L11 13h2v3l.007.117a1 1 0 001.986 0L15 16V8l-.007-.117A1 1 0 0014 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleNumber4FilledIcon;
/* prettier-ignore-end */

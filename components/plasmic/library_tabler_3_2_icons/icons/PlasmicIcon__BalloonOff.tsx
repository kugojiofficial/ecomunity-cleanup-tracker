/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BalloonOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BalloonOffIcon(props: BalloonOffIconProps) {
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
          "M14 8a2 2 0 00-2-2M7.762 3.753A6 6 0 0118 8c0 1.847-.37 3.564-1.007 4.993m-1.59 2.42C14.436 16.413 13.263 17 12 17c-3.314 0-6-4.03-6-9 0-.593.086-1.166.246-1.707M12 17v1a2 2 0 01-2 2H7a2 2 0 00-2 2M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BalloonOffIcon;
/* prettier-ignore-end */

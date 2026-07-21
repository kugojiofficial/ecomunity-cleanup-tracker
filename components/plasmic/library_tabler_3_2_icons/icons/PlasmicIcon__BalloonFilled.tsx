/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BalloonFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BalloonFilledIcon(props: BalloonFilledIconProps) {
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
          "M12 1a7 7 0 017 7c0 5.457-3.028 10-7 10-3.9 0-6.89-4.379-6.997-9.703L5 8l.004-.24A7 7 0 0112 1zm0 4a1 1 0 100 2l.117.007A1 1 0 0113 8l.007.117A1 1 0 0015 8a3 3 0 00-3-3z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12 16a1 1 0 01.993.883L13 17v1a3 3 0 01-2.824 2.995L10 21H7a1 1 0 00-.993.883L6 22a1 1 0 11-2 0 3 3 0 012.824-2.995L7 19h3a1 1 0 00.993-.883L11 18v-1a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BalloonFilledIcon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AdCircleOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AdCircleOffIcon(props: AdCircleOffIconProps) {
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
          "M4.91 4.949A9.968 9.968 0 002 12c0 5.523 4.477 10 10 10a9.968 9.968 0 007.05-2.909m1.728-2.298A9.955 9.955 0 0022 12c0-5.523-4.477-10-10-10-1.74 0-3.376.444-4.8 1.225"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7 15v-4.5a1.5 1.5 0 012.138-1.358m.716.711c.094.196.146.415.146.647V15m-3-2h3m4 1v1h1m2-2v-2a2 2 0 00-2-2h-1v1M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AdCircleOffIcon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ConfettiOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ConfettiOffIcon(props: ConfettiOffIconProps) {
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
          "M4 5h1m0 0v1m6.5-2L11 6m7-1h2m-1-1v2m-4 3l-1 1m4 3l2-.5M18 19h1m0 0v1m-5-3.482L7.482 10l-4.39 9.58a1 1 0 001.329 1.329L14 16.518zM3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ConfettiOffIcon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ShareOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ShareOffIcon(props: ShareOffIconProps) {
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
          "M3 12a3 3 0 106 0 3 3 0 00-6 0zm12-6a3 3 0 106 0 3 3 0 00-6 0zm.861 9.896a3 3 0 004.265 4.22m.578-3.417a3.012 3.012 0 00-1.507-1.45M8.7 10.7l1.336-.688M12.66 8.66L15.3 7.3m-6.6 6l6.6 3.4M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ShareOffIcon;
/* prettier-ignore-end */

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MouseOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MouseOffIcon(props: MouseOffIconProps) {
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
          "M7.733 3.704A3.982 3.982 0 0110 3h4a4 4 0 014 4v7m-.1 3.895A4 4 0 0114 21h-4a4 4 0 01-4-4V7c0-.3.033-.593.096-.874M12 7v1M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MouseOffIcon;
/* prettier-ignore-end */

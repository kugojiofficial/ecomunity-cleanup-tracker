/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FlagOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FlagOffIcon(props: FlagOffIconProps) {
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
          "M5 5v16M19 5v9M7.641 3.645A5 5 0 0112 5a5 5 0 007 0M5 14a5 5 0 017 0 4.984 4.984 0 003.437 1.429m3.019-.966c.19-.14.371-.294.544-.463M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FlagOffIcon;
/* prettier-ignore-end */

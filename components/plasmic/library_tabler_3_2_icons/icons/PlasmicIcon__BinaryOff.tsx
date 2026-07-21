/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BinaryOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BinaryOffIcon(props: BinaryOffIconProps) {
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
          "M11 7V5h-1m8 14v-1M15.5 5h2a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5zm-5 9h2a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5zM6 10v.01M6 19v.01M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BinaryOffIcon;
/* prettier-ignore-end */

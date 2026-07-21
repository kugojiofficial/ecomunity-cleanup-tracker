/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ThumbUpOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ThumbUpOffIcon(props: ThumbUpOffIconProps) {
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
          "M7 11v8a1 1 0 01-1 1H4a1 1 0 01-1-1v-7a1 1 0 011-1h3zm0 0a3.986 3.986 0 002.828-1.172M11 7V6a2 2 0 114 0v5h3a2 2 0 012 2c-.222 1.112-.39 1.947-.5 2.503m-.758 3.244C18.35 19.57 17.698 20.059 17 20h-7a3 3 0 01-3-3M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ThumbUpOffIcon;
/* prettier-ignore-end */

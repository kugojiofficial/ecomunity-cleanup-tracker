/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WomanIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WomanIcon(props: WomanIconProps) {
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
          "M10 16v5m4-5v5m-6-5h8l-2-7h-4l-2 7zm-3-5c1.667-1.333 3.333-2 5-2m9 2c-1.667-1.333-3.333-2-5-2m-4-5a2 2 0 104 0 2 2 0 00-4 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WomanIcon;
/* prettier-ignore-end */

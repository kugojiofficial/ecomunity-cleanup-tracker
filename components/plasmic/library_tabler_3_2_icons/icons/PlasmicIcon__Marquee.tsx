/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MarqueeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MarqueeIcon(props: MarqueeIconProps) {
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
          "M4 6a2 2 0 012-2m3 0h1.5m3 0H15m3 0a2 2 0 012 2m0 3v1.5m0 3V15m0 3a2 2 0 01-2 2m-3 0h-1.5m-3 0H9m-3 0a2 2 0 01-2-2m0-3v-1.5m0-3V9"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MarqueeIcon;
/* prettier-ignore-end */

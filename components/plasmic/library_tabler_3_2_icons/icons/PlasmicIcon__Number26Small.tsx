/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Number26SmallIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Number26SmallIcon(props: Number26SmallIconProps) {
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
          "M18 9a1 1 0 00-1-1h-2a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1h-3M6 8h3a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 00-1 1v2a1 1 0 001 1h3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Number26SmallIcon;
/* prettier-ignore-end */

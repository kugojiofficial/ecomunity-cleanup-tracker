/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CarouselHorizontalIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CarouselHorizontalIcon(props: CarouselHorizontalIconProps) {
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
          "M7 6a1 1 0 011-1h8a1 1 0 011 1v12a1 1 0 01-1 1H8a1 1 0 01-1-1V6zm15 11h-1a1 1 0 01-1-1V8a1 1 0 011-1h1M2 17h1a1 1 0 001-1V8a1 1 0 00-1-1H2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CarouselHorizontalIcon;
/* prettier-ignore-end */
